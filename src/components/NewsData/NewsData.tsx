import Image from "next/image";
import axios from "axios";
import { useQuery } from "react-query";
import { Grid } from "../Grid/Grid";
import { Spinner } from "../Icons/Spinner";
import { NewsDataProps } from "./types";

export const NewsData: React.FC = () => {
  const { isLoading, data, error } = useQuery("news", () =>
    axios("https://fortnite-api.com/v2/news/br")
  );

  if (isLoading) {
    return <Spinner />;
  }

  if (error) {
    return <span>Sorry, we hit an error.</span>;
  }

  if (data?.data.data.motds === null) {
    return (
      <h2>
        Sorry, there is no news at the moment.{" "}
        <span role="img" aria-label="crying face">
          😢
        </span>
      </h2>
    );
  }

  return (
    <Grid>
      {data?.data.data.motds.map((element: NewsDataProps) => {
        return (
          <div key={element.id}>
            <Image
              src={`${element.tileImage}`}
              width={384}
              height={192}
              loading="lazy"
              alt={`${element.id}`}
            />
            <h2>{element.title}</h2>
            <p>{element.body}</p>
          </div>
        );
      })}
    </Grid>
  );
};
