import React from "react";
import Loader from "./Loader/Loader";
import { Link } from "react-router-dom";
import "./PokeCard.css"
import "./style.css"

const PokeCard = ({ pokemon, loading,infoPokemon,type}) => {
   //console.log(pokemon);
     

    return (
        <>
        {
            loading ? <Loader /> :
                pokemon.map((item) => {
                    return (
                        <>
                            <Link className="card" key={item.id} to={`/pokemon/${item.id}`}>
                                <h2 className="num">{item.id}</h2>
                                <img src={item.sprites.other.dream_world.front_default} alt="" />
                                <div className="detail-wrapper">
                                <small>Type : {item.types[0].type.name}</small>
                                <h2>{item.name}</h2>
                                </div>
                            </Link>
                        </>
                    )
                })
        }

        </>
    )
}
export default PokeCard;