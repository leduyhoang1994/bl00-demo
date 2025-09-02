import CafeController from "@/controllers/cafe.controller";
let instance: CafeController | null = null;
export const getCafeControllerInstance = (): CafeController => {
  if (!instance) {
    console.log("Creating CafeController instance for the first time.");
    instance = new CafeController();
  }

  return instance;
};