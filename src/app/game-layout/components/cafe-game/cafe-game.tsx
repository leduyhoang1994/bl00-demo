import QuizLayout from "../quiz-layout/quiz-layout";
import QuizLayout2 from "../quiz-layout/quiz-layout-2";
import TableContainer from "./components/table-container";
import TableContainer2 from "./components/table-container-2";
import WallContainer from "./components/wall-container";

export default function CafeGame() {
  return (
    <>
      <WallContainer />
      <TableContainer />
      {/* <TableContainer2 /> */}
      {/* <QuizLayout /> */}
      <QuizLayout2 />
    </>
  );
}