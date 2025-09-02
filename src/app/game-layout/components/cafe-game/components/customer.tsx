"use client";

import { usePixiTexture } from "@/hooks/usePixiTexture";
import RenderIf from "@/utils/condition-render";
import { useApplication } from "@pixi/react";
import { Graphics, Texture } from "pixi.js";

function createChatBubbleTexture(app: any, options = {}) {
  const {
    width = 200,
    height = 100,
    radius = 20,
    tailWidth = 30,
    tailHeight = 20,
    fill = 0xffffff, // màu nền bubble
    stroke = 0x000000, // viền
    strokeWidth = 2,
  }: any = options;

  const g = new Graphics();

  g.roundRect(0, 0, width, height, radius)
    .fill({ color: fill })
    .stroke({ color: stroke, width: strokeWidth });

  // Đuôi bubble
  g.moveTo(width * 0.3, height)
    .lineTo(width * 0.3 + tailWidth / 2, height + tailHeight)
    .lineTo(width * 0.3 + tailWidth, height)
    .closePath()
    .fill({ color: fill })
    .stroke({ color: stroke, width: strokeWidth });

  // Convert sang texture
  const texture = app.renderer.generateTexture(g);
  return texture;
}

export default function Customer({ avatar, x, y }: any) {
  const { app } = useApplication();
  const customerTexture = usePixiTexture(
    `/images/cafe-game/customers/${avatar}`
  );

  if (customerTexture == Texture.EMPTY || customerTexture == null) {
    return <></>;
  }

  const chatBubbleTexture = createChatBubbleTexture(app);

  return (
    <pixiContainer>
      <pixiSprite
        anchor={{ x: 0.5, y: 1 }}
        x={x}
        y={y}
        texture={customerTexture}
      />
      <pixiSprite
        anchor={{ x: 0.5, y: 1 }}
        x={x}
        y={y}
        texture={chatBubbleTexture}
      />
    </pixiContainer>
  );
}
