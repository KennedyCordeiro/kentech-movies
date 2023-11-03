import "@testing-library/jest-dom";
import MovieCard from ".";
import { render, screen } from "@testing-library/react";

describe("movieCard", async () => {
  it("should render the card", async () => {
    render(<MovieCard movie={null} />);

    expect(screen.getByText("title")).toBeInTheDocument();
  });
});
