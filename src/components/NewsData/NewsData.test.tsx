import React from "react";
import { NewsData } from "./NewsData";

import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

test("renders a <Card/> correctly with given props", () => {
  const mockNewsData = [
    {
      id: "Exotic Weapons",
      title: "Exotic Weapons",
      tabTitle: null,
      body:
        "Got Bars? Some of the Island's Characters have exotic weapons that they'll part with only for a hefty price. Track them down and try one out today!",
      image:
        "https://cdn2.unrealengine.com/15br-exoticweapons-motd-1920x1080-1920x1080-814e0e55efa8.jpg",
      tileImage:
        "https://cdn2.unrealengine.com/15br-exoticweapons-motd-1024x512-1024x512-d6ff496883b8.jpg",
      sortingPriority: 10,
      hidden: false,
    },
  ];
  render(<NewsData data={mockNewsData} />);

  const mockCard = screen.getByTestId("news-data");
  expect(mockCard).toBeInTheDocument();
});
