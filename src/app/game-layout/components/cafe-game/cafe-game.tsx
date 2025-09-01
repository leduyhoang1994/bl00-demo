import RenderIf from "@/utils/condition-render";
import QuizLayout from "../quiz-layout/quiz-layout";
import QuizLayout2 from "../quiz-layout/quiz-layout-2";
import ShopContainer from "./components/shop-container";
import TableContainer from "./components/table-container";
import TableContainer2 from "./components/table-container-2";
import WallContainer from "./components/wall-container";
import CafeGameStore from "@/stores/cafe-game-store/cafe-game-store";

export default function CafeGame() {
  const { toggleVisitShop } = CafeGameStore();
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