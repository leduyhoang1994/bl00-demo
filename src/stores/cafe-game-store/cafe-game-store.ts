import { create } from "zustand";

type CafeGameState = {
  toggleVisitShop: boolean;
  toggleAbilitiShop: boolean;
  setToggleVisitShop: (toggleVisitShop: boolean) => void;
  setToggleAbilitiShop: (toggleAbilitiShop: boolean) => void;
};

const initialStateCafeGame = {
  toggleVisitShop: false,
  toggleAbilitiShop: false,
};

const CafeGameStore = create<CafeGameState>((set, get) => ({
  ...initialStateCafeGame,
  setToggleVisitShop: (toggleVisitShop) => set({ toggleVisitShop }),
  setToggleAbilitiShop: (toggleAbilitiShop) => set({ toggleAbilitiShop }),
}));

export default CafeGameStore;
