import React, { useContext, useState } from 'react'
import axios from 'axios'
import { mainContext } from '../../context/mainProvider'
import PokemonCard from '../../components/pokemonCard/PokemonCard'
import Header from '../../components/header/Header'

const Home = () => {
    const {pokemons, setPokemons, darkMode, toggleDarkMode, value, setValue} = useContext(mainContext)
    const [disableNext, setDisableNext] = useState(false)
    const [disablePrev, setDisablePrev] = useState(false)
    let [number, setNumber] = useState(0)
    console.log("value", value);

    const nextPage = () => {
        if (value >= 1202) {
            setDisableNext(true)
        } else {
            setDisableNext(false)
            number = (Number(value) + 100)
            setValue(number)
        }
    }

    const previousPage = () => {
        if (value <= 1) {
            setDisablePrev(true)
        } else {
            setDisablePrev(false)
            number = (Number(value) - 100)
            setValue(number)
        }
    }

    return (
        <>
            <Header/>
            <main className={darkMode ? 'dark' : 'light'}>
                <div className='divHome'>
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
                </div>
                <div className='buttonsPrevNext'>
                    <button onClick={previousPage} disabled={disablePrev} className='buttonsHome buttonPrev'>Vorherige</button>
                    <button onClick={nextPage} disabled={disableNext} className='buttonsHome buttonNext'>Nächste</button>
                </div>
            </main>
        </>
    )
}

export default Home