import { getByTestId, render } from "@testing-library/react";
import { describe } from "vitest";
import ButtonStyled from ".";
import "@testing-library/jest-dom";
const buttonTestID = "button";

describe("Button", () => {
  test("Should be to see the initial text on screen", () => {
    const {} = render(
      <ButtonStyled
        Text="botão"
        Onclick={() => {
          console.log("test passed!");
        }}
      ></ButtonStyled>
    );
  });
});
