'use client';

import { usePixiTexture } from "@/hooks/usePixiTexture";
import { useApplication, useExtend } from "@pixi/react";
import { Graphics, Sprite, Texture, TilingSprite, Text } from "pixi.js";
import BoxLayout from "../../box-layout/box-layout";
import CafeGameStore from "@/stores/cafe-game-store/cafe-game-store";

export default function WallContainer() {
  useExtend({ Sprite, TilingSprite, Graphics, Text });
  const { app } = useApplication();
  const { cafeMoney } = CafeGameStore();
  const appHeight = app.screen.height;
  const appWidth = app.screen.width;
  const currentWallHeight = appHeight / 2;
  const itemsContainerWidth = appWidth * 0.9;
  const itemsContainerHeight = appHeight * 0.8 * 0.5;
  const textureWall = usePixiTexture("/images/cafe-game/back-ground-row.svg");
  const textureClock = usePixiTexture("/images/cafe-game/clock.svg");
  const textureWindow = usePixiTexture("/images/cafe-game/window.svg");
  const textureMenu = usePixiTexture("/images/cafe-game/menu.svg");

  return (
    <pixiContainer label="Wall cafe-game">
      {textureWall !== Texture.EMPTY && (
        <pixiTilingSprite
          texture={textureWall}
          x={0}
          y={0}
          width={appWidth}
          height={currentWallHeight}
        />
      )}

      <pixiContainer label="Items Wall cafe-game"
        width={itemsContainerWidth}
        height={itemsContainerHeight}
        x={(appWidth - itemsContainerWidth) / 2}
        y={(currentWallHeight - itemsContainerHeight) / 2}
      >
        {textureClock !== Texture.EMPTY && (
          <pixiSprite
            texture={textureClock}
            x={0}
            y={(itemsContainerHeight - itemsContainerWidth / 6) / 2}
            width={itemsContainerWidth / 6}
            height={itemsContainerWidth / 6}
          />
        )}

        {textureWindow !== Texture.EMPTY && (
          <pixiSprite
            texture={textureWindow}
            x={(itemsContainerWidth - itemsContainerWidth / 1.8) / 2}
            y={0}
            width={itemsContainerWidth / 1.8}
            height={itemsContainerHeight}
          />
        )}

        {textureMenu !== Texture.EMPTY && (
          <pixiSprite
            texture={textureMenu}
            x={itemsContainerWidth - (itemsContainerWidth / 6)}
            y={(itemsContainerHeight - itemsContainerWidth / 5) / 2}
            width={itemsContainerWidth / 6}
            height={itemsContainerWidth / 5}
          />
        )}
      </pixiContainer>
      <pixiContainer label="Money cafe-game" x={appWidth / 1.2}>
        <BoxLayout value={cafeMoney} />
      </pixiContainer>
    </pixiContainer>
  )
}
