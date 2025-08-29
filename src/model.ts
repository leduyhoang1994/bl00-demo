export interface Stock {
    id: string;
    name: string;
    quantity: number;
    price: number; // tiền nhận được khi phục vụ xong
    enabled: boolean;
}

export interface Question {
    id: string;
    text: string;
    answers: { id: string; text: string }[]; // danh sách đáp án
    correctAnswerId: string; // id của đáp án đúng
}

export interface ShopItem {
    id: string;
    stockId: string;
    enabled: boolean; // true nếu có thể mua
}

export interface OrderItem {
    stockId: string;
    quantity: number;
}

export interface Customer {
    id: string;
    name: string;
    orders: OrderItem[];
}

export interface Ability {
    id: string;
    name: string;
    price: number;
    enabled: boolean;
    purchased: boolean;
}
