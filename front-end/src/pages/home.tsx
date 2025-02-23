import GameSection from "../components/GameSection";
import PageDisplay from "../components/PageDisplay";
import Header from "../components/Header";

export default function Home() {
  return (
    <PageDisplay>
      <Header />
      <GameSection />
    </PageDisplay>
  );
}
