import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import PokeCard from "./PokeCard"
import "./style.css"

export const Main = () => {
    const [pokeData, setPokeData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [url, setUrl] = useState("https://pokeapi.co/api/v2/pokemon/")
    const [nextUrl, setNextUrl] = useState();
    const [prevUrl, setPrevUrl] = useState();

    const pokeFun = async () => {
        setLoading(true)
        const res = await axios.get(url);
        setNextUrl(res.data.next);
        setPrevUrl(res.data.previous);
        getPokemon(res.data.results)
        setLoading(false)
    }

    const getPokemon = async (res) => {
        res.map(async (item) => {
            const result = await axios.get(item.url)
            setPokeData(state => {
                state = [...state, result.data]
                state.sort((a, b) => a.id > b.id ? 1 : -1)
                return state;
            })
        })
    }

    useEffect(() => {
        pokeFun();
    }, [url])

    return (
        <>
          <h1 className="header">PokeDex Find Your Pokemon</h1>
            <div className="container">
                <div className="left-content">
                    <PokeCard pokemon={pokeData} loading={loading} />
                    </div>
                    </div>
                  
                  <div className="btn-group">
                        {prevUrl && <button onClick={() => {
                            setPokeData([])
                            setUrl(prevUrl)
                        }}>Previous</button>}

                        {nextUrl && <button onClick={() => {
                            setPokeData([])
                            setUrl(nextUrl)
                        }}>Next</button>}
            </div>
        </>
    )
}
