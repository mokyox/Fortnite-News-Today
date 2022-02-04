import Head from "next/head";
import axios from "axios";
import { NewsData } from "../src/components/NewsData/NewsData";
import { displayDate } from "../src/utils/utils";
import { Spinner } from "../src/components/Icons/Spinner";
import { useQuery } from "react-query";

const Home = () => {
  const { isLoading, data, error } = useQuery("news", () =>
    axios("https://fortnite-api.com/v2/news/br")
  );

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
        {isLoading && <Spinner />}
        {error && <span>Sorry, we hit an error.</span>}
        {data?.data.data.motds === null && (
          <h2>
            Sorry, there is no news at the moment.{" "}
            <span role="img" aria-label="crying face">
              😢
            </span>
          </h2>
        )}
        <NewsData data={data?.data.data.motds} />
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
