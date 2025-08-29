import { usePixiTexture } from "@/hooks/usePixiTexture";
import { useApplication, useExtend } from "@pixi/react";
import { Container, Sprite, Texture, TilingSprite } from "pixi.js";
import VisitShopButton from "../../button-layout/button-layout";

export default function TableContainer() {
  useExtend({ Container, Sprite, TilingSprite });
  const { app } = useApplication();
  const appHeight = app.view.height;
  const appWidth = app.view.width;
  const currentTableHeight = appHeight / 2;
  const textureTable = usePixiTexture("/images/cafe-game/back-ground-table.svg");
  const texturePlate = usePixiTexture("/images/cafe-game/plate.svg");
  const itemsContainerWidth = appWidth * 0.92;
  const itemsContainerHeight = appHeight * 0.8 * 0.5;

  const buttonContainerWidth = appWidth / 1.8;
  const buttonContainerHeight = appHeight / 9;
  const buttonWidth = buttonContainerWidth / 2.5;

  return (
    <pixiContainer label="Table cafe-game"
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
      <pixiContainer label="Plate Table cafe-game"
        width={itemsContainerWidth}
        height={itemsContainerHeight}
        x={(appWidth - itemsContainerWidth) / 2}
        y={(currentTableHeight - itemsContainerHeight) / 2}
      >
        {[...Array(9)].map((_, i) => {
          const plateWidth = itemsContainerWidth / 9;
          const plateHeight = plateWidth;
          const x = i * plateWidth;
          const y = (i % 2 === 0) ? 0 : plateHeight;

          return (
            <pixiSprite
              key={i}
              texture={texturePlate}
              x={x}
              y={y}
              width={plateWidth}
              height={plateHeight}
            />
          );
        })}
      </pixiContainer>
      <pixiContainer label="Button Table cafe-game"
        width={buttonContainerWidth}
        height={buttonContainerHeight}
        x={(appWidth - buttonContainerWidth) / 2}
        y={currentTableHeight - buttonContainerHeight - 10}
      >
        <VisitShopButton
          btnWidth={buttonWidth}
          btnText="Restock Food" />
        <VisitShopButton
          btnWidth={buttonWidth}
          btnContainerX={(buttonContainerWidth - buttonWidth)} />
      </pixiContainer>
    </pixiContainer>
  )
}