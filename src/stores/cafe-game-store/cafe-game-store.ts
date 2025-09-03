import { getCafeControllerInstance } from "@/helpers/cafeController.singleton";
import { create } from "zustand";

type CafeGameState = {
  toggleVisitShop: boolean;
  toggleAbilitiShop: boolean;
  cafeBalance: number;
  cafeStocks: any[];
  cafeShopItems: any[];
  cafeAbilitiesItems: any[];
  setToggleVisitShop: (value: boolean) => void;
  setToggleAbilitiShop: (value: boolean) => void;
  setCafeBalance: (value: number) => void;
  setCafeStocks: (value: any[]) => void;
  setCafeShopItems: (value: any[]) => void;
  setCafeAbilitiesItems: (value: any[]) => void;
  loadCafeBalance: () => void;
  loadCafeStocks: () => void;
  loadCafeShopItems: () => void;
  loadCafeAbilities: () => void;
  loadCafeData: () => void;
};

const initialState: Omit<CafeGameState,
  | "setToggleVisitShop"
  | "setToggleAbilitiShop"
  | "setCafeBalance"
  | "setCafeStocks"
  | "setCafeShopItems"
  | "setCafeAbilitiesItems"
  | "loadCafeBalance"
  | "loadCafeStocks"
  | "loadCafeShopItems"
  | "loadCafeAbilities"
  | "loadCafeData"
> = {
  toggleVisitShop: false,
  toggleAbilitiShop: false,
  cafeBalance: 0,
  cafeStocks: [],
  cafeShopItems: [],
  cafeAbilitiesItems: [],
};

const cafeController = getCafeControllerInstance();

const CafeGameStore = create<CafeGameState>((set, get) => ({
  ...initialState,
  setToggleVisitShop: (value) => set({ toggleVisitShop: value }),
  setToggleAbilitiShop: (value) => set({ toggleAbilitiShop: value }),
  setCafeBalance: (value) => set({ cafeBalance: value }),
  setCafeStocks: (value) => set({ cafeStocks: value }),
  setCafeShopItems: (value) => set({ cafeShopItems: value }),
  setCafeAbilitiesItems: (value) => set({ cafeAbilitiesItems: value }),
  loadCafeBalance: () => get().setCafeBalance(cafeController.getBalance()),
  loadCafeShopItems: () => get().setCafeShopItems(cafeController.getShop()),
  loadCafeStocks: () => get().setCafeStocks(cafeController.getStocks()),
  loadCafeAbilities: () => get().setCafeAbilitiesItems(cafeController.getAbilities()),
  loadCafeData: () => {
    const store = get();
    store.loadCafeBalance();
    store.loadCafeStocks();
    store.loadCafeShopItems();
    store.loadCafeAbilities();
  }
}));

export default CafeGameStore;
