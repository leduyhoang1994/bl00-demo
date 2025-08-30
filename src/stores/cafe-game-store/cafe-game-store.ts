import { create } from "zustand";

type CafeGameState = {
  toggleVisitShop: boolean;
  setToggleVisitShop: (toggleVisitShop: boolean) => void;
};

const initialStateCafeGame = {
  toggleVisitShop: false,
};

const CafeGameStore = create<CafeGameState>((set, get) => ({
  ...initialStateCafeGame,
  setToggleVisitShop: (toggleVisitShop) => set({ toggleVisitShop }),

}));

export default CafeGameStore;
