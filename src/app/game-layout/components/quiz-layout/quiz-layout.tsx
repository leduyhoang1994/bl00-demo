import CongraEffect from "@/effects/congra";
import QuizStore from "@/stores/quiz-store/quiz-store";
import { useApplication, useExtend } from "@pixi/react";
import gsap from "gsap";
import { Graphics, TextStyle, Text, Container } from "pixi.js";
import { useEffect, useRef } from "react";

export default function QuizLayout() {
  useExtend({ Graphics, Text });
  const { setToggleQuizContainer, toggleQuizContainer, setShowCongraEffect, showCongraEffect } = QuizStore();
  const { app } = useApplication();
  const appWidth = app.view.width;
  const appHeight = app.view.height;
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

  const answerBorderRadius = 5;

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
  const textStyleAnswer = new TextStyle({ ...baseStyle, fill: "white" });

  const colors = ["#FFA31E", "#3378FF", "#00CF77", "#FF462B"];
  const labels = ["a", "b", "c", "d"];

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

  const drawBoxAnswer = (g: Graphics, colorBoxAnswer: string) => {
    g.clear();
    g.roundRect(0, 0, boxWidth, boxHeight, answerBorderRadius).fill({
      color: colorBoxAnswer,
    });
    g.roundRect(
      0,
      boxHeight - shadowHeight,
      boxWidth,
      shadowHeight,
      answerBorderRadius
    ).fill(shadowObj);
  };

  const doClickAnswser = (label: string) => {
    setShowCongraEffect(true);
    console.log(label);

    if (showCongraEffect) {
      setShowCongraEffect(false);
      setToggleQuizContainer(false);
    }
  };

  useEffect(() => {
    if (!toggleQuizContainer) return;

    gsap.fromTo(quizContainer.current, { scale: 0 }, { scale: 1, duration: 0.2, ease: "none" });
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
          text={
            "ĐÂY LÀ CÂU HỎI ĐÂY LÀ CÂU HỎI ĐÂY LÀ CÂU HỎI ĐÂY LÀ CÂU HỎI ĐÂY LÀ CÂU HỎI"
          }
          style={textStyleQuestion}
          anchor={0.5}
          x={appWidth / 2}
          y={bodyHeight / 2}
          resolution={2}
        />
      </pixiContainer>

      <pixiContainer label="Answer quiz layout" x={gap} y={answerContainerY}>
        {[...Array(4)].map((_, i) => {
          const col = i % 2;
          const row = Math.floor(i / 2);
          const x = col * (boxWidth + gap);
          const y = row * (boxHeight + gap);

          return (
            <pixiContainer key={i} x={x} y={y}>
              <pixiGraphics
                draw={(g) => drawBoxAnswer(g, colors[i])}
                eventMode="static"
                cursor="pointer"
                onPointerDown={() => doClickAnswser(labels[i])}
              />
              <pixiText
                text={labels[i]}
                style={textStyleAnswer}
                anchor={0.5}
                x={boxWidth / 2}
                y={boxHeight / 2}
              />
            </pixiContainer>
          );
        })}
      </pixiContainer>
      {
        showCongraEffect && <CongraEffect />
      }
    </pixiContainer>
  );
}
