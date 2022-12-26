import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Greeting from "./Greeting";

describe("Greeting component.", () => {
  test("renders 'Hello World' as a text", () => {
    // Arrange
    render(<Greeting />);

    // Act
    // Do Nothing...

    // Assert
    const helloWorldElement = screen.getByText("Hello World");
    expect(helloWorldElement).toBeInTheDocument();
  });

  test("renders 'good to see you' if button was NOT clicked.", () => {
    render(<Greeting />);

    const goodToSeeElement = screen.getByText("good to see you", {
      exact: false,
    });
    expect(goodToSeeElement).toBeInTheDocument();
  });

  test("renders 'Changed!' if button was clicked.", () => {
    // Arrange
    render(<Greeting />);

    //Act
    const buttonElement = screen.getByRole("button");
    userEvent.click(buttonElement);

    // Assert
    const outputElement = screen.getByText("Changed!");
    expect(outputElement).toBeInTheDocument();
  });

  test("doesn't render 'good to see you' if button was clicked.", () => {
    // Arrange
    render(<Greeting />);

    //Act
    const buttonElement = screen.getByRole("button");
    userEvent.click(buttonElement);

    // Assert
    const goodToSeeElement = screen.queryByText("good to see you", {
      exact: false,
    });
    expect(goodToSeeElement).toBeNull();
  });
});
