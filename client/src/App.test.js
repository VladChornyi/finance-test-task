import React from "react";
import { render, screen } from "@testing-library/react";

import App from "./App";
import { useDispatch, useSelector } from "./Redux/redux-hooks";
import { testUseAppSelector } from "./Redux/test-app-selector";

window.matchMedia =
  window.matchMedia ||
  function () {
    return {
      matches: false,
      addListener: function () {},
      removeListener: function () {},
    };
  };

jest.mock("./Redux/redux-hooks");

describe("App", () => {
  beforeEach(() => {
    useSelector.mockImplementation(testUseAppSelector);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("renders This is BIRZHA", () => {
    render(<App />);
    const title = screen.getByText(/This is BIRZHA/i);
    expect(title).toBeInTheDocument();
    screen.debug();
  });

  it("should calls dispatch", () => {
    render(<App />);
    expect(useDispatch).toBeCalled();
  });
});
