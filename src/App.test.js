import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

test("renders <App /> component without crashing", () => {
  const {} = render(<App />);

  // console.log(container.asFragment(<PokemonCard />));
  // const linkElement = getByText(/learn react/i);
  // expect(container.firstChild()).toBeInTheDocument();
});
