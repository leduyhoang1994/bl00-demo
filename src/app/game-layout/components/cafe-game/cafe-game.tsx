import RenderIf from "@/utils/condition-render";
import QuizLayout from "../quiz-layout/quiz-layout";
import QuizLayout2 from "../quiz-layout/quiz-layout-2";
import ShopContainer from "./components/shop-container";
import TableContainer from "./components/table-container";
import TableContainer2 from "./components/table-container-2";
import WallContainer from "./components/wall-container";
import CafeGameStore from "@/stores/cafe-game-store/cafe-game-store";
import { useEffect } from "react";
import CafeController from "@/controllers/cafe.controller";

export default function CafeGame() {
  const { setCafeController, toggleVisitShop } = CafeGameStore();

  useEffect(() => {
    setCafeController(new CafeController());
  }, [])

  return (
    <>
      <WallContainer />
      <TableContainer />
      {/* <TableContainer2 /> */}
      <QuizLayout />
      {/* <QuizLayout2 /> */}
      <RenderIf condition={toggleVisitShop}>
        <ShopContainer />
      </RenderIf>

    </>
  );
}