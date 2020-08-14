import React from "react";
import { render } from "@testing-library/react";
import PokemonCard from "../index";

const PokemonCardProps = [{ name: "Heracross", id: 10 }];

it("renders <PokemonCard /> component without crashing", () => {
  const { getByText, debug } = render(
    <PokemonCard pokemonData={PokemonCardProps} />
  );
});

it("shows data passed as props properly", () => {
  const fakeData = { name: "Squirtle", id: "4" };

  const { getByText, debug } = render(
    <PokemonCard pokemonData={{ name: fakeData.name, id: fakeData.id }} />
  );

  getByText(fakeData.name);
  getByText(`#${fakeData.id}`);
});
