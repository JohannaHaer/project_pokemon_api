import React, { useContext, useState } from 'react'
import logo from '../../assets/img/logo.png'
import { Link } from 'react-router-dom'
import { mainContext } from '../../context/mainProvider'

const Header2 = () => {
    const {pokemons, setPokemons, pokemonsBackup, setPokemonsBackup} = useContext(mainContext)
    const [searchInput, setSearchInput] = useState("")

    const search = (event) => {
        const input = event.target.value
        setSearchInput(input)
        const filterPokemons = pokemonsBackup.filter(pokemon => pokemon.name.toLowerCase().includes(input.toLowerCase()))
        setPokemons(filterPokemons)
    }

    return (
        <header>
                <img src={logo} alt="Pokémon Logo" />
                <Link to='/'>Back</Link>
                <input type='text' placeholder='Search Pokémon' onChange={search} value={searchInput}/>
            </header>
    )
}

export default Header2