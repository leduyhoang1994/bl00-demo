import { create } from "zustand";

type QuizState = {
  toggleQuizContainer: boolean;
  setToggleQuizContainer: (toggleQuizContainer: boolean) => void;
};

const initialStateQuiz = {
  toggleQuizContainer: false,
};

const QuizStore = create<QuizState>((set, get) => ({
  ...initialStateQuiz,
  setToggleQuizContainer: (toggleQuizContainer) => set({ toggleQuizContainer }),

}));

export default QuizStore;
