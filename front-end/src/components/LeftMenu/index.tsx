import HorizontalDivider from "../HorizontalDivider";
import Link from "../Link";
import styles from "./styles.module.scss";

type LeftMenuLink = {
  url: string;
  text: string;
};

export default function LeftMenu() {
  const mockedItems = [{ url: "/breaker-2d", text: "Breaker Game" }];

  return (
    <section className={styles.leftMenu}>
      {mockedItems.map((item: LeftMenuLink, index: number) => (
        <div>
          <Link url={item.url} text={item.text} key={index} />
          <HorizontalDivider />
        </div>
      ))}
    </section>
  );
}
