import React, { useContext, useState } from 'react'
import axios from 'axios'
import { mainContext } from '../../context/mainProvider'
import PokemonCard from '../../components/pokemonCard/PokemonCard'
import Header from '../../components/header/Header'

const Home = () => {
    const {pokemons, setPokemons, darkMode, toggleDarkMode} = useContext(mainContext)
    
    return (
        <>
            <Header/>
            <main className={darkMode ? 'dark' : 'light'}>
                {pokemons.map((pokemon, index) => {
                    let i = pokemon.url.slice(34).replace('/', '')
                    return(
                        <div key={index} className='divPreview'>
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