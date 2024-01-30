import React, { useContext } from 'react'
import axios from 'axios'
import { mainContext } from '../../context/mainProvider'
import PokemonCard from '../../components/pokemonCard/PokemonCard'

const Home = () => {
    const {pokemons, setPokemons} = useContext(mainContext)

    return (
        <>
            <main>
                {pokemons.map((pokemon, index) => {
                    let i = pokemon.url.slice(34).replace('/', '')
                    return(
                        <div key={index}>
                            <PokemonCard
                                name={pokemon.name}
                                id={i}
                                img={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${i}.png`}
                            />
                        </div>
                    )
                })}
            </main>
        </>
    )
}

export default Home