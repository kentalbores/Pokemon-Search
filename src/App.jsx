import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [pokemonSprite, setPokemonSprite] = useState(0);
  const [pokemonHeight, setPokemonHeight] = useState(0);

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
      setPokemonHeight(data.height);
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
    document.querySelector("#height").innerHTML = pokemonHeight;
    console.log("Changed");
    document.querySelector("#pokemonDisplay").style.display = "block";
    document.querySelector("#details").style.display = "block";
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
      <div id="details" style={display}>
        <p>
          height: <span id="height">0</span>
        </p>
      </div>
    </>
  );
}

export default App;
