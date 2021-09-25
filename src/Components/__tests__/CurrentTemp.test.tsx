import React from "react";
import { render } from "@testing-library/react-native";
import CurrentTemp from "../CurrentTemp";

describe("Current Temp Component", () => {
  it("displays the tempature", () => {
    const { getByText } = render(<CurrentTemp temp="52.3" />);
    getByText(/52.3/);
  });
  it("displays some kind of instruction for the user", () => {
    const { getByText } = render(<CurrentTemp temp="20" />);
    getByText(/tempature/);
  });
});
