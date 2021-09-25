import React from "react";
import { render } from "@testing-library/react-native";
import { getFarenheight } from "../../Conversion";

import ForecastItem from "../ForecastItem";

describe("Forecast Temp Item Component", () => {
  it("displays the temp in farenheight", () => {
    const mockedItem = {
      dt_txt: "this",
      main: {
        temp: 300,
      },
    };

    const { getByText } = render(<ForecastItem item={mockedItem} />);
    getByText(/80.33/);
  });
  it("displays the date", () => {
    const mockedItem = {
      dt_txt: "this",
      main: {
        temp: 300,
      },
    };

    const { getByText } = render(<ForecastItem item={mockedItem} />);
    getByText(/this/);
  });
});
