import RenderIf from "@/utils/condition-render";
import QuizLayout from "../quiz-layout/quiz-layout";
import ShopContainer from "./components/shop-container";
import TableContainer from "./components/table-container";
import WallContainer from "./components/wall-container";
import CafeGameStore from "@/stores/cafe-game-store/cafe-game-store";
import { useEffect } from "react";
import CafeController from "@/controllers/cafe.controller";
import CustomerContainer from "./components/customer-container";

export default function CafeGame() {
  const { setCafeController, toggleVisitShop, setCafeMoney } = CafeGameStore();

  useEffect(() => {
    setCafeController(new CafeController());

    setTimeout(() => {
      setCafeMoney(100);
    }, 2000);
  }, [])

  return (
    <>
      <WallContainer />
      <CustomerContainer />
      <TableContainer />
      <QuizLayout />
      <RenderIf condition={toggleVisitShop}>
        <ShopContainer />
      </RenderIf>

    </>
  );
}