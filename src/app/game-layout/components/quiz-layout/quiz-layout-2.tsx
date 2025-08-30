"use client";

import "@pixi/layout/react";
import "@pixi/layout";
import { useApplication, useExtend } from "@pixi/react";
import { LayoutContainer } from "@pixi/layout/components";
import { usePixiTexture } from "@/hooks/usePixiTexture";
import { Sprite, Texture } from "pixi.js";

export default function QuizLayout2() {
  useExtend({ LayoutContainer, Sprite });
  const { app } = useApplication();
  const appHeight = app.screen.height;
  const appWidth = app.screen.width;
  const texturePlate = usePixiTexture("/images/cafe-game/plate.svg");

  return (
    <layoutContainer
      background={new Sprite(Texture.WHITE)}
      layout={{
        width: appWidth,
        height: appHeight,
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
        flexWrap: "wrap",
        gap: 0,
      }}
    >
      <pixiSprite
        texture={texturePlate}
        layout={{
          objectFit: "contain",
        }}
      />
      <pixiSprite
        texture={texturePlate}
        layout={{
          objectFit: "contain",
        }}
      />
      <pixiSprite
        texture={texturePlate}
        layout={{
          objectFit: "contain",
        }}
      />
      <pixiSprite
        texture={texturePlate}
        layout={{
          objectFit: "contain",
        }}
      />
      <pixiSprite
        texture={texturePlate}
        layout={{
          objectFit: "contain",
        }}
      />
      <pixiSprite
        texture={texturePlate}
        layout={{
          objectFit: "contain",
        }}
      />
      <pixiSprite
        texture={texturePlate}
        layout={{
          objectFit: "contain",
        }}
      />
      <pixiSprite
        texture={texturePlate}
        layout={{
          objectFit: "contain",
        }}
      />
      <pixiSprite
        texture={texturePlate}
        layout={{
          objectFit: "contain",
        }}
      />
      <pixiSprite
        texture={texturePlate}
        layout={{
          objectFit: "contain",
        }}
      />
      <pixiSprite
        texture={texturePlate}
        layout={{
          objectFit: "contain",
        }}
      />
    </layoutContainer>
  );
}
