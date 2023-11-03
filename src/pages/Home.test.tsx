import "@testing-library/jest-dom";
import { getByText, render } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import Home from "./Home";

describe("Home", () => {
  test("Should be able to see the text on screen", () => {
    const { debug } = render(<Home />);

    expect(getByText("Bem vindo(a) a Kentech Filmes")).toBeInTheDocument();
  });
});
