import HorizontalDivider from "../HorizontalDivider";
import styles from "./styles.module.scss";
import Link from "../Link";

type LeftMenuLink = {
  url: string;
  text: string;
};

export default function LeftMenu() {
  const mockedItems = [
    { url: "/game-section?game=breaker-2d", text: "2D Breakout Game " },
  ];

  return (
    <section className={styles.leftMenu}>
      {mockedItems.map((item: LeftMenuLink, index: number) => (
        <div key={index}>
          <Link url={item.url} text={item.text} />
          <HorizontalDivider />
        </div>
      ))}
    </section>
  );
}
