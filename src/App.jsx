import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [pokemonSprite, setPokemonSprite] = useState(0);

  /* useEffect(() => {
    fetchData();
  }, []); */
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const pokemonName = document.querySelector("#pokemonName").value;
    if (pokemonName != false) {
      const response = await fetch(
        "https://pokeapi.co/api/v2/pokemon/" + pokemonName
      );
      const data = await response.json();
      setPokemonSprite(data.sprites.other.home.front_default);
      console.log(data);
      document.querySelector("#pokemonDisplay").src = pokemonSprite;
    }
  };

  const display = {
    display: "none",
  };

  const showPokemon = () => {
    fetchData();
    document.querySelector("#pokemonDisplay").src = pokemonSprite;
    console.log("Changed");
    document.querySelector("#pokemonDisplay").style.display = "block";
  };

  return (
    <>
      <div id="bg"></div>
      <h1>Pokemon Finder Hehe</h1>
      <div id="topDiv">
        <input placeholder="Choose Your Pokemon" id="pokemonName"></input>
        <button id="searchButton" onClick={showPokemon}>
          🔍
        </button>
      </div>
      <div>
        <img id="pokemonDisplay" src="" alt="Pokemon" style={display} />
      </div>
    </>
  );
}

export default App;
