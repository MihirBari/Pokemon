import React from "react";
import "./Loader.css";
import CatchingPokemonIcon from '@mui/icons-material/CatchingPokemon';


export const Loader = () => {
  return (
    <div className="loading">
      <div>
        <CatchingPokemonIcon />
      </div>
    </div>
  );
};

export default Loader;


