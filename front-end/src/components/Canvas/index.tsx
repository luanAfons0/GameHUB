import { useEffect } from "react";
import styles from "./styles.module.scss";
import BreakoutGame from "../../games/breakout_2d/BreakoutGame";

export default function Canvas() {
  useEffect(() => {
    const game = new BreakoutGame();
    game.init();
  }, []);

  return <canvas id="canvas" className={styles.canvas}></canvas>;
}
