import React from "react";
import { NewsData } from "./NewsData";

import { render, screen } from "@testing-library/react";

test("renders a <Card/> correctly with given props", () => {
  const image =
    "https://cdn-live.prm.ol.epicgames.com/15br-exoticweapons-motd-1920x1080-1920x1080-814e0e55efa8.jpg";

  const mockNewsData = [
    {
      id: "Exotic Weapons",
      title: "Exotic Weapons",
      tabTitle: null,
      body: "Got Bars? Some of the Island's Characters have exotic weapons that they'll part with only for a hefty price. Track them down and try one out today!",
      image: image,
      tileImage: image,
      sortingPriority: 10,
      hidden: false,
    },
  ];
  render(<NewsData data={mockNewsData} />);

  const mockCardTitle = screen.getByRole("heading", { name: "Exotic Weapons" });
  expect(mockCardTitle).toBeInTheDocument();
});
