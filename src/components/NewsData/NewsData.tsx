import Image from "next/image";
import { Grid } from "../Grid/Grid";
import { NewsDataProps } from "./types";

export const NewsData: React.FC<NewsDataProps> = ({ data }) => {
  return (
    <Grid>
      {data?.map((element) => {
        return (
          <div data-testid="news-data" key={element.id}>
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
