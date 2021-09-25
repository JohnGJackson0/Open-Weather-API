import { waitFor } from "@testing-library/react-native";
import React from "react";
import { fireEvent, render } from "react-native-testing-library";
import Forecast from "../Forecast";

describe("Forecast Component", () => {
  it("routes back to home", async () => {
    const fakeNavigator = {
      navigate: jest.fn(),
      getParam: jest.fn(),
      goBack: jest.fn(),
    };

    const { getByText } = render(<Forecast navigation={fakeNavigator} />);
    fireEvent.press(getByText("return"));

    await waitFor(() => {
      expect(fakeNavigator.goBack).toHaveBeenCalled();
    });
  });
});
