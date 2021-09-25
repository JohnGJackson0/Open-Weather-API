import React from "react";
import { render, waitFor } from "@testing-library/react-native";
import RequestingLocationScreen from "../RequestingLocationScreen";

describe("Requesting Location Service", () => {
  it("renders instructions", () => {
    const fakeNavigator = {
      reset: jest.fn(),
    };

    const { getByText } = render(
      <RequestingLocationScreen navigation={fakeNavigator} />
    );

    getByText(/permission/);
  });
  it("It wont route with no permission accepted", () => {
    const fakeNavigator = {
      reset: jest.fn(),
    };
    render(<RequestingLocationScreen navigation={fakeNavigator} />);

    expect(fakeNavigator.reset).not.toHaveBeenCalled();
  });
  it("Should match the snapshot exactly", async () => {
    const fakeNavigator = {
      reset: jest.fn(),
    };

    const component = render(
      <RequestingLocationScreen navigation={fakeNavigator} />
    );

    expect(component).toMatchSnapshot();
  });
});
