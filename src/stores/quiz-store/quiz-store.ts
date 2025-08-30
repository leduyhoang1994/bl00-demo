import { create } from "zustand";

type QuizState = {
  toggleQuizContainer: boolean;
  showCongraEffect: boolean;
  setToggleQuizContainer: (toggleQuizContainer: boolean) => void;
  setShowCongraEffect: (showCongraEffect: boolean) => void;
};

const initialStateQuiz = {
  toggleQuizContainer: false,
  showCongraEffect: false,
};

const QuizStore = create<QuizState>((set, get) => ({
  ...initialStateQuiz,
  setToggleQuizContainer: (toggleQuizContainer) => set({ toggleQuizContainer }),
  setShowCongraEffect: (showCongraEffect) => set({ showCongraEffect }),
}));

export default QuizStore;
