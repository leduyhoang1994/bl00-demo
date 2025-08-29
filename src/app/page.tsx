"use client";

import { Application } from "@pixi/react";
import { useRef } from "react";
import styles from "./game.module.css";
import GameContainer from "./application";

export default function Home() {
  const gameContainer = useRef(null);

  return (
    <div ref={gameContainer} className={styles.game_container}>
      <Application resizeTo={gameContainer}>
        <GameContainer />
      </Application>
    </div>
  );
}
