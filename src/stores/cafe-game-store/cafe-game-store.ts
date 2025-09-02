import CafeController, { CafeControllerInterface } from "@/controllers/cafe.controller";
import { create } from "zustand";

type CafeGameState = {
  toggleVisitShop: boolean;
  toggleAbilitiShop: boolean;
  cafeController: CafeController | null;
  setToggleVisitShop: (toggleVisitShop: boolean) => void;
  setToggleAbilitiShop: (toggleAbilitiShop: boolean) => void;
  setCafeController: (cafeController: CafeController) => void;
};

const initialStateCafeGame = {
  toggleVisitShop: false,
  toggleAbilitiShop: false,
  cafeController: null,
};

const CafeGameStore = create<CafeGameState>((set, get) => ({
  ...initialStateCafeGame,
  setToggleVisitShop: (toggleVisitShop) => set({ toggleVisitShop }),
  setToggleAbilitiShop: (toggleAbilitiShop) => set({ toggleAbilitiShop }),
  setCafeController: (cafeController) => set({ cafeController }),
}));

export default CafeGameStore;
