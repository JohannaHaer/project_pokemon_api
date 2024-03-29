import React, { useContext, useEffect, useState } from 'react'
import { mainContext } from '../../context/mainProvider'
import { useParams } from 'react-router-dom'
import PokemonCard from '../../components/pokemonCard/PokemonCard'
import axios from 'axios'
import Header2 from '../../components/header2/Header2'

const TypeResults = () => {
    const typeNames = useParams()
    const {types, setTypes, pokemons, setPokemons, darkMode, toggleDarkMode} = useContext(mainContext)
    const [pokemon, setPokemon] = useState([])
    const [pokemonNames, setPokemonNames] = useState([])
    const pokemonArray = []

    useEffect(() => {
        const apiFetch = async() => {
            const resp = await axios.get(`https://pokeapi.co/api/v2/type/${typeNames.type}`)
            setPokemon(resp.data.pokemon)
            // console.log("typeNames", resp.data.pokemon);
        }
        {typeNames ? apiFetch() : null}
    }, [typeNames.type])


    useEffect(() => {
        const fetchPokemonData = async() => {
            
            for(let poke of pokemon) {
                const resp = await axios.get(`${poke.pokemon.url}`)
                pokemonArray.push(resp.data)
                // console.log("resp.data", resp.data);
            }
            setPokemonNames(pokemonArray)
        }
        fetchPokemonData()
    }, [pokemon])

    // console.log("pokemonNames", pokemonNames);

    return (
        <section className={`secResults ${darkMode ? 'dark' : 'light'}`}>
            <Header2/>
            {pokemonNames.length !== 0
            ? (
                <div className='divHome'>
                    {pokemonNames?.map((pokemon, index) => {
                    
                        return(
                            <div key={index} className='divPreview'>
                                <PokemonCard
                                    name={pokemon?.name}
                                    id={pokemon?.id}
                                    img={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${pokemon?.id}.png`}
                                />
                            </div>
                        )
                    })
                    }
                </div>
            )
            : (
                <div className='loadingAnimation'>
                    <p className={`loading ${darkMode ? 'loadingDark' : 'loadingLight'}`}>Loading...</p>
                    <div className="pokeball pokeball-animated"></div>
                </div>
            )
            }
        </section>
    )
}

export default TypeResults