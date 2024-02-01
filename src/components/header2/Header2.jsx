import React, { useContext, useState } from 'react'
import logo from '../../assets/img/logo.png'
import { Link } from 'react-router-dom'
import { mainContext } from '../../context/mainProvider'

const Header2 = () => {
    const {pokemons, setPokemons, pokemonsBackup, setPokemonsBackup, darkMode, toggleDarkMode} = useContext(mainContext)
    const [searchInput, setSearchInput] = useState("")

    const search = (event) => {
        const input = event.target.value
        setSearchInput(input)
        const filterPokemons = pokemonsBackup.filter(pokemon => pokemon.name.toLowerCase().includes(input.toLowerCase()))
        setPokemons(filterPokemons)
    }

    return (
        <header className={darkMode ? 'dark' : 'light'}>
            <Link to='/'><img src={logo} alt="Pokémon Logo" /></Link>
            <div className='headerBar'>
                <div className='header2Flex'>
                    <Link to='/'>
                        <div className='back'></div>
                    </Link>
                    <Link to='/menu' className='burgerMenu'>
                            <div className={darkMode ? 'burgerMenuLineDark' : 'burgerMenuLineLight'}></div>
                            <div className={darkMode ? 'burgerMenuLineDark' : 'burgerMenuLineLight'}></div>
                            <div className={darkMode ? 'burgerMenuLineDark' : 'burgerMenuLineLight'}></div>
                    </Link>
                </div>
                <input type='text' placeholder='Search Pokémon' onChange={search} value={searchInput} className='searchBar'/>
                <div onClick={toggleDarkMode} className={`toggleButton ${darkMode ? 'toggleButtonLight' : 'toggleButtonDark'} ${darkMode ? 'light' : 'dark'}`}></div>
            </div>
        </header>
    )
}

export default Header2