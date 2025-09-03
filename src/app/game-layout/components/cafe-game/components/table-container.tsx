"use client";

import { usePixiTexture } from "@/hooks/usePixiTexture";
import { useApplication, useExtend } from "@pixi/react";
import { Assets, Container, Sprite, Texture, TilingSprite } from "pixi.js";
import ButtonLayout from "../../button-layout/button-layout";
import QuizStore from "@/stores/quiz-store/quiz-store";
import { useRef } from "react";
import CafeGameStore from "@/stores/cafe-game-store/cafe-game-store";
import PlateComponent from "./plate-component";

export default function TableContainer() {
  useExtend({ Sprite, TilingSprite });
  const { setToggleQuizContainer } = QuizStore();
  const { setToggleVisitShop, cafeStocks } = CafeGameStore();
  const { app } = useApplication();
  const plateContainer = useRef<Container>(new Container());
  console.log('cafeStocks', cafeStocks);

  const appHeight = app.screen.height;
  const appWidth = app.screen.width;
  const currentTableHeight = appHeight / 2;
  const textureTable = usePixiTexture(
    "/images/cafe-game/back-ground-table.svg"
  );

  const itemsContainerWidth = appWidth * 0.92;

  const buttonContainerWidth = appWidth / 1.8;
  const buttonContainerHeight = appHeight / 9;
  const buttonWidth = buttonContainerWidth / 2.5;

  const doClickRestockFood = () => {
    setToggleQuizContainer(true);
    console.log("doClickRestockFood");
  };

  const doClickVisitShop = () => {
    console.log("doClickVisitShop");
    setToggleVisitShop(true);
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
        {cafeStocks.map((_, i) => {
          const plateWidth = itemsContainerWidth / 9;
          const plateHeight = plateWidth;
          const x = i * plateWidth * 0.8;
          const y = i % 2 === 0 ? 0 : plateHeight * 0.8;
          let plateIndex;
          if (i % 2 === 0) {
            plateIndex = i / 2;
          } else {
            plateIndex = (i - 1) / 2 + 5;
          }
          const plateData = cafeStocks[plateIndex];
          const image = Assets.get(plateData.image);
          const enabled = plateData.enabled;
          const quantity = plateData.quantity;
          return (
            <PlateComponent
              enabled={enabled}
              quantity={quantity}
              i={plateIndex}
              key={i}
              plateWidth={plateWidth}
              plateHeight={plateHeight}
              x={x}
              y={y}
              textureItem={image}
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
