import React from "react";

import "./styles.css";

function PokemonCard({ pokemonData }) {
  return (
    <div className="pokemonCard">
      <div className="cardHeader">
        <img
          className="cardImage"
          src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/red-blue/1.png"
          // src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/1.png"
          alt={`${pokemonData.name}-image`}
        />
      </div>
      <div className="cardContent">
        <span>Pokemon Stats</span>
      </div>
      <div className="cardFooter">
        <span>{pokemonData.name}</span>
        <span>#{pokemonData.id}</span>
      </div>
    </div>
  );
}

export default PokemonCard;
