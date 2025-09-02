"use client";

import "@pixi/layout/react";
import "@pixi/layout";
import { usePixiTexture } from "@/hooks/usePixiTexture";
import { useApplication, useExtend } from "@pixi/react";
import { Assets, Graphics, Sprite } from "pixi.js";
import { useEffect, useMemo, useRef, useState } from "react";
import { LayoutContainer } from "@pixi/layout/components";
import { randomFromArray } from "@/helpers/random";

const CUSTOMER_AVATARS = [
  "alpaca",
  "chick",
  "chicken",
  "cow",
  "duck",
  "giraffe",
  "hedgehog",
  "parrot",
  "puppy",
  "toucan",
  "walrus",
];

const FOODS = [
  "blook-breakfast",
  "blook-cafe-level",
  "blook-cereal",
  "blook-french-waffle",
  "blook-milk-carton",
  "blook-orange-carton",
  "blook-pancake",
  "blook-toast",
  "blook-waffle",
  "blook-yogurt",
];

function createTooltipBubble(app: any, options = {}) {
  const {
    width = 150,
    height = 200,
    radius = 12,
    tailSize = 20,
    border = 5,
    fill = 0xffffff,
    stroke = 0x00a9c9, // màu viền xanh
  }: any = options;

  const tailPos = height - 40;

  const g = new Graphics();

  // Thân chính (rounded rect)
  g.roundRect(0, 0, width, height, radius)
    .fill({ color: fill })
    .stroke({ color: stroke, width: border });

  // Đuôi bubble (tam giác nhỏ)
  g.moveTo(0, tailPos) // điểm ở cạnh trái
    .lineTo(-tailSize, tailPos + tailSize / 2)
    .lineTo(0, tailPos + tailSize)
    .closePath()
    .fill({ color: fill })
    .stroke({ color: stroke, width: border });

  // Convert sang texture
  const texture = app.renderer.generateTexture(g);
  return texture;
}

export default function Customer({ x, y }: any) {
  useExtend({ LayoutContainer });
  const { app } = useApplication();

  const customerTexture = useMemo(
    () => Assets.get(`cust-${randomFromArray(CUSTOMER_AVATARS)}`),
    []
  );
  const toastTexture = Assets.get(`blook-toast`);
  const foodCount = 3;

  const custAvatarRef = useRef<Sprite>(null);
  const foods = Array.from({ length: foodCount }, () => {
    return toastTexture;
  });
  const chatBubbleTexture = createTooltipBubble(app);

  useEffect(() => {}, []);

  return (
    <pixiContainer>
      <pixiSprite
        ref={custAvatarRef}
        anchor={{ x: 0.5, y: 1 }}
        width={130}
        height={150}
        x={x - 130 / 2}
        y={y + 10}
        texture={customerTexture}
      />
      <pixiSprite
        anchor={{ x: 0, y: 1 }}
        x={x - 10}
        y={y - 30}
        texture={chatBubbleTexture}
      />
      <layoutContainer
        x={x + 20}
        y={y - 200 - 32}
        layout={{
          height: 200,
          width: 100,
          justifyContent: "space-between",
          flexDirection: "column",
          gap: 10,
          paddingTop: 10,
          paddingBottom: 10,
        }}
      >
        {foods.map((food, index) => {
          return (
            <pixiSprite
              layout={{ height: "intrinsic", aspectRatio: 1 }}
              texture={food}
              key={index}
            />
          );
        })}
      </layoutContainer>
    </pixiContainer>
  );
}
