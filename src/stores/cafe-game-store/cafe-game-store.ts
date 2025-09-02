import CafeController, { CafeControllerInterface } from "@/controllers/cafe.controller";
import { create } from "zustand";

type CafeGameState = {
  toggleVisitShop: boolean;
  toggleAbilitiShop: boolean;
  cafeController: CafeController | null;
  cafeMoney: number;
  setToggleVisitShop: (toggleVisitShop: boolean) => void;
  setToggleAbilitiShop: (toggleAbilitiShop: boolean) => void;
  setCafeController: (cafeController: CafeController) => void;
  setCafeMoney: (cafeMoney: number) => void;
};

const initialStateCafeGame = {
  toggleVisitShop: false,
  toggleAbilitiShop: false,
  cafeController: null,
  cafeMoney: 0,
};

const CafeGameStore = create<CafeGameState>((set, get) => ({
  ...initialStateCafeGame,
  setToggleVisitShop: (toggleVisitShop) => set({ toggleVisitShop }),
  setToggleAbilitiShop: (toggleAbilitiShop) => set({ toggleAbilitiShop }),
  setCafeController: (cafeController) => set({ cafeController }),
  setCafeMoney: (cafeMoney) => set({ cafeMoney }),
}));

export default CafeGameStore;
