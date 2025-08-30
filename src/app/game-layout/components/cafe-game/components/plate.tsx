"use client";

import "@pixi/layout/react";
import "@pixi/layout";
import { usePixiTexture } from "@/hooks/usePixiTexture";
import { Container } from "pixi.js";
import { useRef } from "react";

const PLATE_SIZE = 120;

export default function Plate({ i }: { i: number }) {
  const texturePlate = usePixiTexture("/images/cafe-game/plate.svg");
  const plateContainer = useRef<Container>(null);
  return (
    <pixiContainer
      ref={plateContainer}
      y={i > 4 ? PLATE_SIZE * -0.25 : 0}
      layout={{
        isLeaf: true,
        maxHeight: PLATE_SIZE,
        maxWidth: PLATE_SIZE,
      }}
    >
      <pixiSprite texture={texturePlate} />
    </pixiContainer>
  );
}
