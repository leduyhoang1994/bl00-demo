import {Ability, Customer, Stock, OrderItem, Question, ShopItem} from "../model";
export default class CafeController {
  private stocks: Stock[] = [];
  private shopItems: ShopItem[] = [];
  private customers: Customer[] = [];
  private balance: number = 0;
  private questions: Question[] = [];
  private currentQuestion: Question | null = null;
  private abilities: Ability[];
  private doubleRewardCount: number = 0; //  số khách còn lại được x2 tiền

  constructor() {
    this.stocks = [
      { id: 'f1', name: 'Coffee', quantity: 0, price: 5, enabled: true },
      { id: 'f2', name: 'Milk', quantity: 0, price: 5, enabled: false },
      { id: 'f3', name: 'Cookie', quantity: 0, price: 12, enabled: false },
      { id: 'f4', name: 'Cake', quantity: 0, price: 15, enabled: false },
    ];

    // Init ShopItems
    this.shopItems = this.stocks.map((s, idx) => ({
      id: 's' + (idx + 1),
      stockId: s.id,
      enabled: false,
    }));

    // init Questions
    this.questions = [
      {
        id: 'q1',
        text: '2 + 2 = ?',
        answers: [
          { id: 'a1', text: '3' },
          { id: 'a2', text: '4' },
          { id: 'a3', text: '5' },
          { id: 'a4', text: '6' },
        ],
        correctAnswerId: 'a2',
      },
    ];

    this.abilities = [
      {
        id: '1',
        name: 'Supply Crate',
        price: 0,
        enabled: false,
        purchased: false,
      },
      {
        id: '2',
        name: 'Happy Customer',
        price: 0,
        enabled: false,
        purchased: false,
      },
      {
        id: '3',
        name: 'Run It Back',
        price: 0,
        enabled: false,
        purchased: false,
      },
    ];
  }

  // Lấy số tiền
  getBalance(): number {
    return this.balance;
  }

  // Lấy danh sách món ăn
  getStocks(): Stock[] {
    return this.stocks;
  }

  getQuestion(): Question {
    const idx = Math.floor(Math.random() * this.questions.length);
    this.currentQuestion = this.questions[idx];
    return this.currentQuestion;
  }

  answerQuestion(answerId: string): {correct: boolean, message: string} {
    if (!this.currentQuestion) {
      return { correct: false, message: 'No question has been asked yet' };
    }

    const isCorrect = this.currentQuestion.correctAnswerId === answerId;
    if (!isCorrect) {
      this.currentQuestion = null;
      return { correct: false, message: 'Wrong answer.' };
    }

    // đúng thì +1 số lượng cho tất cả món ăn enable
    this.stocks.forEach((s) => {
      if (s.enabled) s.quantity += 1;
    });

    this.currentQuestion = null;
    return { correct: true, message: "OK"};
  }


  getShop(): ShopItem[] {
    return this.shopItems.map((item) => {
      const stock = this.stocks.find((s) => s.id === item.stockId);
      return {
        ...item,
        enabled: stock ? this.balance >= stock.price : false,
      };
    });
  }

  // Mua trong Shop
  buyShopItem(shopItemId: string):  { success: boolean, message: string } {
    const shopItem = this.shopItems.find((s) => s.id === shopItemId);
    if (!shopItem) return { success: false, message: 'Item not found' };

    const stockIndex = this.stocks.findIndex(
        (s) => s.id === shopItem.stockId,
    );
    if (stockIndex === -1)
      return { success: false, message: 'Food stock not found' };

    const stock = this.stocks[stockIndex];

    if (this.balance < stock.price) {
      return { success: false, message: 'Not enough money' };
    }

    this.balance -= stock.price;

    this.stocks[stockIndex] = {
      ...stock,
      enabled: true,
      quantity: stock.quantity + 1,
      price: stock.price + 100, // tăng giá sau mỗi lần mua lên 100 tiền
    };

    return {
      success: true,
      message: `${stock.name} purchased! New price: ${this.stocks[stockIndex].price}`,
    };
  }

  getNextCustomer(): Customer {
    const enabledFoods = this.stocks.filter((s) => s.enabled);

    const orderCount = Math.min(
        Math.floor(Math.random() * 3) + 1, // random 1 -> 3
        enabledFoods.length,
    );

    const orders: OrderItem[] = [];

    const shuffled = [...enabledFoods].sort(() => 0.5 - Math.random());
    for (let i = 0; i < orderCount; i++) {
      const food = shuffled[i];
      orders.push({ stockId: food.id, quantity: 1 });
    }
    const customerNew = {
      id: 'c_' + Math.random().toString(36).substring(2, 9),
      name: 'Customer ' + Math.floor(Math.random() * 100),
      orders,
    };
    this.customers.push(customerNew);

    return customerNew;
  }

  serve(customerId: string) {
    const customerIndex = this.customers.findIndex((c) => c.id === customerId);
    if (customerIndex === -1)
      return { success: false, message: 'Customer not found' };

    const customer = this.customers[customerIndex];

    // Trừ món, cộng tiền
    customer.orders.forEach((order) => {
      const stock = this.stocks.find((s) => s.id === order.stockId)!;
      if (
          stock &&
          stock.enabled &&
          stock.quantity >= order.quantity
      ) {
        stock.quantity -= order.quantity;

        let price = stock.price;
        if (this.doubleRewardCount > 0) {
          price *= 2;
        }
        const earned = price * order.quantity;

        this.balance += earned;
      }
    });

    // Giảm số lượng khách còn x2
    if (this.doubleRewardCount > 0) {
      this.doubleRewardCount -= 1;
    }

    // Xóa customer đã phục vụ xong trong danh sách
    this.customers.splice(customerIndex, 1);

    return { success: true, customer, balance: this.getBalance() };
  }

  getAbilities(): Ability[] {
    return this.abilities.map((ability) => ({
      ...ability,
      enabled: !ability.purchased && this.balance >= ability.price,
    }));
  }

  buyAbilityItem(itemId: string): { success: boolean, message: string } {
    const ability = this.abilities.find((a) => a.id === itemId);
    if (!ability) return { success: false, message: 'Ability not found' };
    if (ability.purchased)
      return { success: false, message: 'Already purchased' };
    if (this.balance < ability.price)
      return { success: false, message: 'Not enough money' };

    // Trừ tiền
    this.balance -= ability.price;
    ability.purchased = true;

    // Xử lý logic theo từng loại item
    switch (ability.id) {
      case '1':
        this.stocks.forEach((stock) => {
          if (stock.enabled) {
            stock.quantity += 7;
          }
        });
        break;

      case '2':
        this.doubleRewardCount = 5; // 5 khách tiếp theo sẽ x2
        break;

      case '3':
        this.abilities.forEach((a) => {
          a.purchased = false;
        });
        break;
    }

    return { success: true, message: `${ability.name} purchased!` };
  }
}