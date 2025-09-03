import CongraEffect from "@/effects/congra";
import QuizStore from "@/stores/quiz-store/quiz-store";
import { useApplication, useExtend } from "@pixi/react";
import gsap from "gsap";
import { Graphics, TextStyle, Text, Container } from "pixi.js";
import { useEffect, useRef } from "react";
import AnswerBtn from "./answer-btn";
import { getCafeControllerInstance } from "@/helpers/cafeController.singleton";
import CafeGameStore from "@/stores/cafe-game-store/cafe-game-store";

export default function QuizLayout() {
  useExtend({ Graphics, Text });
  const {
    setToggleQuizContainer,
    toggleQuizContainer,
    setShowCongraEffect,
    showCongraEffect,
    setAnswerQuiz
  } = QuizStore();
  const { loadCafeStocks } = CafeGameStore();
  const { app } = useApplication();
  const cafeController = getCafeControllerInstance();
  const questionData = cafeController.getQuestion();
  const question = questionData.text;
  const answers = questionData.answers;
  const appWidth = app.screen.width;
  const appHeight = app.screen.height;
  const quizContainer = useRef<Container>(null);

  const headerHeight = appHeight / 15;
  const shadowHeight = 6;
  const bodyHeight = appHeight / 2 - headerHeight;
  const shadowObj = {
    color: 0x000000,
    alpha: 0.2,
  };

  const gap = 6;
  const answerContainerHeight = appHeight / 2 - gap;
  const answerContainerY = appHeight - answerContainerHeight - gap;
  const answerContainerWidth = appWidth - gap * 2;

  const boxWidth = (answerContainerWidth - gap) / 2;
  const boxHeight = (answerContainerHeight - gap) / 2;

  const baseStyle: any = {
    fontFamily: "Arial, sans-serif",
    fontWeight: "500",
    align: "center",
    wordWrap: true,
    wordWrapWidth: appWidth - 40,
    breakWords: true,
    fontSize: "30%",
  };

  const textStyleQuestion = new TextStyle({ ...baseStyle, fill: "black" });

  const colors = ["#FFA31E", "#3378FF", "#00CF77", "#FF462B"];

  const drawBackground = (g: Graphics) => {
    g.clear();
    g.roundRect(0, 0, appWidth, appHeight, 0).fill({ color: "white" });
  };

  const drawHeader = (g: Graphics) => {
    g.clear();
    g.roundRect(0, 0, appWidth, headerHeight, 0).fill({ color: 0x9a49aa });
    g.roundRect(0, headerHeight - shadowHeight, appWidth, shadowHeight, 0).fill(
      shadowObj
    );
  };

  const drawBody = (g: Graphics) => {
    g.clear();
    g.roundRect(0, 0, appWidth, bodyHeight, 0).fill({ color: "white" });
  };

  const doClickAnswser = (answerId: any) => {
    setAnswerQuiz(true);
    setTimeout(() => {
      setAnswerQuiz(false);
      setToggleQuizContainer(false);
      setShowCongraEffect(false);
      loadCafeStocks();
    }, 2000);
    const userAnswer = cafeController.answerQuestion(answerId)
    console.log('userAnswer', userAnswer);

    if (!userAnswer.correct) {
      return
    }
    setShowCongraEffect(true);
  };

  useEffect(() => {
    if (!toggleQuizContainer) return;

    gsap.fromTo(
      quizContainer.current,
      { scale: 0 },
      { scale: 1, duration: 0.2, ease: "none" }
    );
  }, [toggleQuizContainer]);

  if (!toggleQuizContainer) {
    return null;
  }

  return (
    <pixiContainer
      label="Quiz layout"
      ref={quizContainer}
      pivot={{ x: appWidth / 2, y: appHeight / 2 }}
      x={appWidth / 2}
      y={appHeight / 2}
    >
      <pixiGraphics draw={drawBackground} />
      <pixiContainer label="Header quiz layout">
        <pixiGraphics draw={drawHeader} />
      </pixiContainer>
      <pixiContainer label="body quiz layout" x={0} y={headerHeight}>
        <pixiGraphics draw={drawBody} />
        <pixiText
          text={question}
          style={textStyleQuestion}
          anchor={0.5}
          x={appWidth / 2}
          y={bodyHeight / 2}
          resolution={2}
        />
      </pixiContainer>

      <pixiContainer label="Answer quiz layout" x={gap} y={answerContainerY}>
        {answers.map((answer, i) => {
          const col = i % 2;
          const row = Math.floor(i / 2);
          const x = col * (boxWidth + gap);
          const y = row * (boxHeight + gap);
          const text = answer.text;
          const asnwerId = answer.id;
          return (
            <AnswerBtn
              asnwerId={asnwerId}
              text={text}
              key={i}
              i={i}
              x={x}
              y={y}
              boxWidth={boxWidth}
              boxHeight={boxHeight}
              colors={colors}
              shadowHeight={shadowHeight}
              shadowObj={shadowObj}
              baseStyle={baseStyle}
              doClickAnswser={doClickAnswser}
            />
          );
        })}
      </pixiContainer>
      {showCongraEffect && <CongraEffect />}
    </pixiContainer>
  );
}
