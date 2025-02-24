import PageDisplay from "../components/PageDisplay";
import Container from "../components/Container";
import FlexRow from "../components/FlexRow";
import Header from "../components/Header";
import Link from "../components/Link";

export default function Home() {
  return (
    <PageDisplay>
      <Header />
      <Container>
        <FlexRow>
          <div>
            <h1>Here is the home page!</h1>
            <p>The basic content of the site is here.</p>
            <Link text="Go to all games" url="/game-section" />
          </div>
        </FlexRow>
      </Container>
    </PageDisplay>
  );
}
