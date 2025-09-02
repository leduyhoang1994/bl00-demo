import { getCafeControllerInstance } from "@/helpers/cafeController.singleton";
import { create } from "zustand";

type CafeGameState = {
  toggleVisitShop: boolean;
  toggleAbilitiShop: boolean;
  cafeBalance: number;
  cafeStocks: Array<any>;
  cafeShopItems: Array<any>;
  cafeAbilitiesItems: Array<any>;
  setToggleVisitShop: (toggleVisitShop: boolean) => void;
  setToggleAbilitiShop: (toggleAbilitiShop: boolean) => void;
  setCafeBalance: (cafeBalance: number) => void;
  setCafeStocks: (cafeStocks: Array<any>) => void;
  setCafeShopItems: (cafeShopItems: Array<any>) => void;
  setCafeAbilitiesItems: (cafeAbilitiesItems: Array<any>) => void;
  loadCafeBalance: () => void;
  loadCafeStocks: () => void;
  loadCafeShopItems: () => void;
};

const initialStateCafeGame = {
  toggleVisitShop: false,
  toggleAbilitiShop: false,
  cafeBalance: 0,
  cafeStocks: [],
  cafeShopItems: [],
  cafeAbilitiesItems: [],
};

const cafeController = getCafeControllerInstance();

const CafeGameStore = create<CafeGameState>((set, get) => ({
  ...initialStateCafeGame,
  setToggleVisitShop: (toggleVisitShop) => set({ toggleVisitShop }),
  setToggleAbilitiShop: (toggleAbilitiShop) => set({ toggleAbilitiShop }),
  setCafeBalance: (cafeBalance) => set({ cafeBalance }),
  setCafeStocks: (cafeStocks) => set({ cafeStocks }),
  setCafeShopItems: (cafeShopItems) => set({ cafeShopItems }),
  setCafeAbilitiesItems: (cafeAbilitiesItems) => set({ cafeAbilitiesItems }),
  loadCafeBalance: () => {
    const { setCafeBalance } = get();
    setCafeBalance(cafeController.getBalance());
  },
  loadCafeShopItems: () => {
    const { setCafeShopItems } = get();
    setCafeShopItems(cafeController.getShop());
  },
  loadCafeStocks: () => {
    const { setCafeStocks } = get();
    console.log(cafeController.getStocks());

    setCafeStocks(cafeController.getStocks());
  }
}));

export default CafeGameStore;
