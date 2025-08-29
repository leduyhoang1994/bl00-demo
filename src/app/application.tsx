import { extend, useApplication } from "@pixi/react";
import { Container } from "pixi.js";
import CongraEffect from "./effects/congra";

extend({
  Container,
});

export default function GameContainer() {
  const { app } = useApplication();
  (globalThis as any).__PIXI_APP__ = app;

  return (
    <pixiContainer label="Game Container">
      <CongraEffect />
    </pixiContainer>
  );
}
