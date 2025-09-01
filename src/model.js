"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ABILITIES = exports.QUESTIONS = exports.STOCKS = void 0;
exports.STOCKS = [
    {
        id: 's1',
        name: 'Toast',
        quantity: 0,
        price: 5,
        enabled: true,
        currentIndexLevel: 0,
        sellPrices: [0, 300, 5250, 1750, 3500],
        rewardPrices: [2, 53, 525, 1750, 3500],
        image: '/images/cafe-game/stocks/Toast.png'
    },
    {
        id: 's2',
        name: 'Cereal',
        quantity: 0,
        price: 5,
        enabled: false,
        currentIndexLevel: 0,
        sellPrices: [5, 1500, 16250, 212500, 650000],
        rewardPrices: [18, 263, 2625, 8750, 17500],
        image: '/images/cafe-game/stocks/Cereal.png'
    },
    {
        id: 's3',
        name: 'Yogurt',
        quantity: 0,
        price: 5,
        enabled: false,
        currentIndexLevel: 0,
        sellPrices: [10, 4500, 78750, 637500, 1950000],
        rewardPrices: [53, 788, 7875, 26250, 52500],
        image: '/images/cafe-game/stocks/Yogurt.png'
    },
    {
        id: 's4',
        name: 'Breakfast Combo',
        quantity: 0,
        price: 5,
        enabled: false,
        currentIndexLevel: 0,
        sellPrices: [50, 9000, 157500, 1275000, 3900000],
        rewardPrices: [105, 1575, 15750, 52500, 105000],
        image: '/images/cafe-game/stocks/BreakfastCombo.png'
    },
    {
        id: 's5',
        name: 'Orange Juice',
        quantity: 0,
        price: 5,
        enabled: false,
        currentIndexLevel: 0,
        sellPrices: [200, 15000, 262500, 2125000, 6500000],
        rewardPrices: [175, 2625, 26250, 87500, 175000],
        image: '/images/cafe-game/stocks/OrangeJuice.png'
    },
    {
        id: 's6',
        name: 'Milk',
        quantity: 0,
        price: 5,
        enabled: false,
        currentIndexLevel: 0,
        sellPrices: [500, 22500, 393750, 3187500, 9750000],
        rewardPrices: [263, 3938, 39375, 131250, 262500],
        image: '/images/cafe-game/stocks/Milk.png'
    },
    {
        id: 's7',
        name: 'Waffle',
        quantity: 0,
        price: 5,
        enabled: false,
        currentIndexLevel: 0,
        sellPrices: [2000, 31500, 551250, 4462500, 13650000],
        rewardPrices: [368, 5513, 55125, 183750, 367500],
        image: '/images/cafe-game/stocks/Waffle_blook2.png'
    },
    {
        id: 's8',
        name: 'Pancakes',
        quantity: 0,
        price: 5,
        enabled: false,
        currentIndexLevel: 0,
        sellPrices: [5000, 420000, 735000, 5950000, 18200000],
        rewardPrices: [490, 7350, 245000, 490000],
        image: '/images/cafe-game/stocks/Pancakes.png'
    },
    {
        id: 's9',
        name: 'French Toast',
        quantity: 0,
        price: 5,
        enabled: false,
        currentIndexLevel: 0,
        sellPrices: [7500, 54000, 2945000, 7650000, 23400000],
        rewardPrices: [630, 9450, 94500, 315000, 630000],
        image: '/images/cafe-game/stocks/FrenchToast.png'
    },
];
exports.QUESTIONS = [
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
exports.ABILITIES = [
    {
        id: 1,
        name: 'Paycheck Bonus',
        description: 'Give a player +25% of their balance',
        price: 500,
        enabled: false,
        purchased: false,
        isActive: false,
        image: '/images/cafe-game/abilities/PaycheckBonus.png'
    },
    {
        id: 2,
        name: 'Supply Crate',
        description: ' +25% of their balance+7 stock of all your foods',
        price: 1000,
        enabled: false,
        purchased: false,
        isActive: true,
        image: '/images/cafe-game/abilities/SupplyCrate.png'
    },
    {
        id: 3,
        name: 'Happy Customer',
        description: 'Your next 5 customers pay double',
        price: 2500,
        enabled: false,
        purchased: false,
        isActive: true,
        image: '/images/cafe-game/abilities/HappyCustomers.png'
    },
    {
        id: 4,
        name: 'Trash the Food',
        description: 'Lower a players food stocks by 3 each',
        price: 5000,
        enabled: false,
        purchased: false,
        isActive: false,
        image: '/images/cafe-game/abilities/TrashtheFood.png'
    },
    {
        id: 5,
        name: 'TAXES!',
        description: 'Reduce a players balance by 25%',
        price: 7500,
        enabled: false,
        purchased: false,
        isActive: false,
        image: '/images/cafe-game/abilities/TAXES!!!.png'
    },
    {
        id: 6,
        name: 'Health Inspection',
        description: 'Force a player to get a 12s',
        price: 10000,
        enabled: false,
        purchased: false,
        isActive: false,
        image: '/images/cafe-game/abilities/HealthInspection.png'
    },
    {
        id: 7,
        name: 'Run It Back',
        description: 'Be able to buy all your abilities again',
        price: 150000,
        enabled: false,
        purchased: false,
        isActive: true,
        image: '/images/cafe-game/abilities/RunItBack.png'
    },
];
