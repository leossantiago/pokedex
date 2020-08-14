import React from "react";
import logo from "./logo.svg";
import "./App.css";
import PokemonCard from "./components/PokemonCard";

const PokemonCardProps = {
  name: "Bulbasaur",
  id: 1,
};

function App() {
  return (
    <div>
      <PokemonCard pokemonData={PokemonCardProps} />
    </div>
  );
}

export default App;
