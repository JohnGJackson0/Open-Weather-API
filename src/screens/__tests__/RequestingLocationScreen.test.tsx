import React from "react";
import { render } from "@testing-library/react-native";
import RequestingLocationScreen from "../RequestingLocationScreen";

describe("Requesting Location Service", () => {
  it("renders instructions", () => {
    const { getByText } = render(<RequestingLocationScreen />);

    getByText(/permission/);
  });
});
