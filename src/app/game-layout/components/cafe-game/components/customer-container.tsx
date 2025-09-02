"use client";

import "@pixi/layout/react";
import "@pixi/layout";
import { useApplication, useExtend } from "@pixi/react";
import Customer from "./customer";
import { Sprite } from "pixi.js";
import { LayoutContainer } from "@pixi/layout/components";

export default function CustomerContainer() {
  useExtend({ LayoutContainer, Sprite });

  const { app } = useApplication();
  const appWidth = app.screen.width;
  const appHeight = app.screen.height;

  const containerHeight = appHeight * 0.5;
  const custWidth = appWidth / 3;

  const cusPos1 = { x: custWidth * 1 - appWidth / 3 / 2, y: containerHeight };
  const cusPos2 = { x: custWidth * 2 - appWidth / 3 / 2, y: containerHeight };
  const cusPos3 = { x: custWidth * 3 - appWidth / 3 / 2, y: containerHeight };

  return (
    <pixiContainer label="Customer Container cafe-game">
      <Customer x={cusPos1.x} y={cusPos1.y} />
      <Customer x={cusPos2.x} y={cusPos2.y} />
      <Customer x={cusPos3.x} y={cusPos3.y} />
    </pixiContainer>
  );
}
