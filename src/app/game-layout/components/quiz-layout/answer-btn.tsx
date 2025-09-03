import gsap from "gsap";
import { Graphics, TextStyle } from "pixi.js";
import { useEffect, useRef } from "react";
import { darken } from "../../../../helpers/color";
import QuizStore from "@/stores/quiz-store/quiz-store";

export default function AnswerBtn({
  i,
  x,
  y,
  boxWidth,
  boxHeight,
  colors,
  baseStyle,
  doClickAnswser,
  asnwerId,
  text
}: {
  i: number;
  x: number;
  y: number;
  boxWidth: number;
  boxHeight: number;
  shadowHeight: number;
  shadowObj: any;
  colors: string[];
  baseStyle: any;
  doClickAnswser: (answer: string | number) => void;
  asnwerId?: any,
  text?: string | number
}) {
  const answerBorderRadius = 5;
  const textStyleAnswer = new TextStyle({ ...baseStyle, fill: "white" });
  const btnGraphics = useRef<Graphics>(new Graphics());

  const { answerQuiz } = QuizStore();

  const defaultActive = {
    interactive: true,
    eventMode: "static",
    cursor: "pointer",
  }
  const activeObj = answerQuiz ? {} : defaultActive

  const drawBoxAnswer = (g: Graphics, colorBoxAnswer: string) => {
    g.clear();
    g.roundRect(0, 0, boxWidth, boxHeight - 7, answerBorderRadius).fill({
      color: colorBoxAnswer,
    });
  };

  const drawShadown = (g: Graphics, colorBoxAnswer: string) => {
    g.clear();
    g.roundRect(
      0,
      boxHeight / 2,
      boxWidth,
      boxHeight / 2,
      answerBorderRadius
    ).fill({
      color: darken(colorBoxAnswer, 0.3),
    });
  };

  useEffect(() => {
    if (!btnGraphics.current) {
      return;
    }

    btnGraphics.current.on("pointerover", () => {
      const gr = btnGraphics.current;
      gsap.to(gr, {
        y: gr.y - gr.height * 0.02,
        duration: 0.1,
      });
    });

    btnGraphics.current.on("pointerout", () => {
      const gr = btnGraphics.current;
      gsap.to(gr, {
        y: 0,
        duration: 0.1,
      });
    });

    btnGraphics.current.on("pointerdown", () => {
      const gr = btnGraphics.current;
      gsap.to(gr, {
        y: 5,
        duration: 0.05,
      });
    });

    btnGraphics.current.on("pointerup", () => {
      const gr = btnGraphics.current;
      gsap.to(gr, {
        y: 0,
        duration: 0.05,
      }).then(() => {
        doClickAnswser(asnwerId);
      });
    });
  });

  return (
    <pixiContainer key={i} x={x} y={y}>
      <pixiGraphics draw={(g) => drawShadown(g, colors[i])} />
      <pixiGraphics
        ref={btnGraphics}
        draw={(g) => drawBoxAnswer(g, colors[i])}
        {...activeObj}
      />
      <pixiText
        text={text}
        style={textStyleAnswer}
        anchor={0.5}
        x={boxWidth / 2}
        y={boxHeight / 2}
      />
    </pixiContainer>
  );
}
