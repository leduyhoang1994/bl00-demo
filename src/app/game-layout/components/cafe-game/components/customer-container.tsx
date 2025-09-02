"use client";

import "@pixi/layout/react";
import "@pixi/layout";
import { LayoutOptions } from "@pixi/layout";
import { useApplication, useExtend } from "@pixi/react";
import Customer from "./customer";
import { Graphics, Sprite, Texture } from "pixi.js";
import { LayoutContainer } from "@pixi/layout/components";
import { randomFromArray } from "@/helpers/random";

const CUSTOMER_AVATARS = [
  "alpaca.svg",
  "chick.svg",
  "chicken.svg",
  "cow.svg",
  "duck.svg",
  "giraffe.svg",
  "hedgehog.svg",
  "parrot.svg",
  "puppy.svg",
  "toucan.svg",
  "walrus.svg",
];

export default function CustomerContainer() {
  useExtend({ LayoutContainer, Sprite });

  const { app } = useApplication();
  const appWidth = app.screen.width;
  const appHeight = app.screen.height;

  const containerWidth = appWidth - 100;
  const containerHeight = appHeight * 0.5;
  const custWidth = appWidth / 3;

  const cusPos1 = { x: custWidth * 1 - appWidth / 3 / 2, y: containerHeight };
  const cusPos2 = { x: custWidth * 2 - appWidth / 3 / 2, y: containerHeight };
  const cusPos3 = { x: custWidth * 3 - appWidth / 3 / 2, y: containerHeight };

  const customerLayout: Omit<LayoutOptions, "target"> = {
    width: containerWidth,
    height: containerHeight,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    flexWrap: "wrap",
    paddingTop: 20,
  };

  const customers: any = [
    {
      avatar: randomFromArray(CUSTOMER_AVATARS),
    },
    {
      avatar: randomFromArray(CUSTOMER_AVATARS),
    },
    {
      avatar: randomFromArray(CUSTOMER_AVATARS),
    },
  ];

  return <pixiContainer label="Customer Container cafe-game">
    <Customer avatar={customers[0].avatar} x={cusPos1.x} y={cusPos1.y} />
  </pixiContainer>;
}
