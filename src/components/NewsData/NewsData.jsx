import Image from "next/image";
import axios from "axios";
import { useQuery } from "react-query";
import { Grid } from "../Grid/Grid";
import { Spinner } from "../Icons/Spinner";

export const NewsData = () => {
  const { isLoading, data, error } = useQuery("news", () =>
    axios("https://fortnite-api.com/v2/news/br")
  );

  if (isLoading) {
    return <Spinner />;
  }

  if (error) {
    return <span>We hit an error.</span>;
  }

  return (
    <Grid>
      {data.data.data.motds.map((element) => {
        console.log(element);
        return (
          <div key={element.id}>
            <Image
              src={`${element.tileImage}`}
              width={384}
              height={216}
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
