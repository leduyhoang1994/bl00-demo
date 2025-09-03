import CafeController from "@/controllers/cafe.controller";
let instance: CafeController | null = null;
export const getCafeControllerInstance = (): CafeController => {
  if (!instance) {
    instance = new CafeController();
  }

  return instance;
};