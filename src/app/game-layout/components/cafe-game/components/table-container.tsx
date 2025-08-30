"use client";

import { usePixiTexture } from "@/hooks/usePixiTexture";
import { useApplication, useExtend } from "@pixi/react";
import { Container, Sprite, Texture, TilingSprite } from "pixi.js";
import ButtonLayout from "../../button-layout/button-layout";
import QuizStore from "@/stores/quiz-store/quiz-store";
import { useRef } from "react";

export default function TableContainer() {
  useExtend({ Sprite, TilingSprite });
  const { setToggleQuizContainer } = QuizStore();
  const { app } = useApplication();
  const plateContainer = useRef<Container>(new Container());

  const appHeight = app.screen.height;
  const appWidth = app.screen.width;
  const currentTableHeight = appHeight / 2;
  const textureTable = usePixiTexture(
    "/images/cafe-game/back-ground-table.svg"
  );
  const texturePlate = usePixiTexture("/images/cafe-game/plate.svg");
  const itemsContainerWidth = appWidth * 0.92;

  const buttonContainerWidth = appWidth / 1.8;
  const buttonContainerHeight = appHeight / 9;
  const buttonWidth = buttonContainerWidth / 2.5;

  const doClickPlate = (index: number) => {
    console.log("index", index);
  };

  const doClickRestockFood = () => {
    setToggleQuizContainer(true);
    console.log("doClickRestockFood");
  };

  const doClickVisitShop = () => {
    console.log("doClickVisitShop");
  };

  return (
    <pixiContainer
      label="Table cafe-game"
      y={currentTableHeight}
      width={appWidth}
      height={currentTableHeight}
    >
      {textureTable !== Texture.EMPTY && (
        <pixiSprite
          texture={textureTable}
          x={0}
          y={0}
          width={appWidth}
          height={currentTableHeight}
        />
      )}
      <pixiContainer
        label="Plate Table cafe-game"
        ref={plateContainer}
        x={(appWidth - plateContainer.current.width) / 2}
        y={15}
      >
        {[...Array(9)].map((_, i) => {
          const plateWidth = itemsContainerWidth / 9;
          const plateHeight = plateWidth;
          const x = i * plateWidth * 0.8;
          const y = i % 2 === 0 ? 0 : plateHeight * 0.8;

          return (
            <pixiSprite
              key={i}
              texture={texturePlate}
              x={x}
              y={y}
              width={plateWidth}
              height={plateHeight}
              eventMode="static"
              cursor="pointer"
              onClick={() => doClickPlate(i)}
            />
          );
        })}
      </pixiContainer>
      <pixiContainer
        label="Button Table cafe-game"
        width={buttonContainerWidth}
        height={buttonContainerHeight}
        x={(appWidth - buttonContainerWidth) / 2}
        y={currentTableHeight - buttonContainerHeight - 10}
      >
        <ButtonLayout
          btnWidth={buttonWidth}
          btnText="Restock Food"
          doClickBtn={doClickRestockFood}
        />
        <ButtonLayout
          btnWidth={buttonWidth}
          btnContainerX={buttonContainerWidth - buttonWidth}
          doClickBtn={doClickVisitShop}
        />
      </pixiContainer>
    </pixiContainer>
  );
}
