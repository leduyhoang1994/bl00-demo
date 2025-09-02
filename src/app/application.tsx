"use client";

import "@pixi/layout/devtools";
import { extend, useApplication } from "@pixi/react";
import { Assets, Container, Text, TextStyle } from "pixi.js";
import CafeGame from "./game-layout/components/cafe-game/cafe-game";
import ASSET_BUNDLE from "@/helpers/bundle";
import { useState, useEffect } from "react";

extend({
  Container,
  Text
});

export default function GameContainer() {
  const [progress, setProgress] = useState(0);
  const [loaded, setLoaded] = useState(false);

  const { app } = useApplication();
  (globalThis as any).__PIXI_APP__ = app;

  useEffect(() => {
    const loadAssets = async () => {
      Assets.addBundle("game", ASSET_BUNDLE);

      // Lắng nghe tiến trình load
      Assets.backgroundLoadBundle("game");
      Assets.loadBundle("game", (progressValue: number) => {
        setProgress(Math.floor(progressValue * 100));
      }).then(() => {
        setLoaded(true);
      });
    };

    loadAssets();
  }, []);

  return (
    <pixiContainer label="Game Container">
      {!loaded ? (
        // Loading Scene
        <pixiContainer x={400} y={300} anchor={0.5}>
          <pixiText
            text={`Loading... ${progress}%`}
            anchor={0.5}
            style={
              new TextStyle({
                fill: "#ffffff",
                fontSize: 28,
                fontWeight: "bold",
              })
            }
          />
        </pixiContainer>
      ) : (
        <CafeGame />
      )}
    </pixiContainer>
  );
}
