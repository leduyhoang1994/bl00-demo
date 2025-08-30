import QuizLayout from "../quiz-layout/quiz-layout";
import TableContainer from "./components/table-container";
import WallContainer from "./components/wall-container";

export default function CafeGame() {
  return (
    <>
      <WallContainer />
      <TableContainer />
      <QuizLayout />
    </>
  );
}