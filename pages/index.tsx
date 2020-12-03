import Head from "next/head";
import { NewsData } from "../src/components/NewsData/NewsData";
import { displayDate } from "../src/utils/utils";

const Home: React.FC = () => {
  return (
    <div className="container">
      <Head>
        <title>Fortnite News</title>
        <link rel="icon" href="/favicon.ico" />
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          name="description"
          content="Get the daily in-game Fortnite News online"
        />
      </Head>

      <main>
        <h1 className="title">Today&apos;s Fortnite News</h1>
        <p className="description">{displayDate()}</p>
        <NewsData />
      </main>

      <footer>
        Data from
        <a
          href="https://fortnite-api.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <strong style={{ marginLeft: "0.25rem" }}>Fortnite-API</strong>.
        </a>
      </footer>
    </div>
  );
};

export default Home;
