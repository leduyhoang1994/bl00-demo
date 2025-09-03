import { create } from "zustand";

type QuizState = {
  toggleQuizContainer: boolean;
  showCongraEffect: boolean;
  answerQuiz: boolean;
  setToggleQuizContainer: (toggleQuizContainer: boolean) => void;
  setShowCongraEffect: (showCongraEffect: boolean) => void;
  setAnswerQuiz: (answerQuiz: boolean) => void;
};

const initialStateQuiz = {
  toggleQuizContainer: false,
  showCongraEffect: false,
  answerQuiz: false,
};

const QuizStore = create<QuizState>((set, get) => ({
  ...initialStateQuiz,
  setToggleQuizContainer: (toggleQuizContainer) => set({ toggleQuizContainer }),
  setShowCongraEffect: (showCongraEffect) => set({ showCongraEffect }),
  setAnswerQuiz: (answerQuiz) => set({ answerQuiz }),
}));

export default QuizStore;
