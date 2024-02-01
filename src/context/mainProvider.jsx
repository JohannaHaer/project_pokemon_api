import React, { createContext, useEffect, useState } from 'react'
import axios from 'axios'
export const mainContext = createContext() 


const MainProvider = ({children}) => {
    const [pokemons, setPokemons] = useState([])
    const [pokemonsBackup, setPokemonsBackup] = useState([])
    const [types, setTypes] = useState([])
    const [darkMode, setDarkMode] = useState(false)

    const toggleDarkMode = () => {
        setDarkMode((oldMode) => !oldMode)
    }

    useEffect(() => {
        const apiFetch = async() => {
            const resp = await axios.get("https://pokeapi.co/api/v2/pokemon/?offset=0&limit=100")
            setPokemons(resp.data.results)
            setPokemonsBackup(resp.data.results)
        }
        apiFetch()
    }, [])

    // console.log("Pokemons", pokemons);

    useEffect(() => {
        const apiFetch = async() => {
            const resp = await axios.get("https://pokeapi.co/api/v2/type/")
            setTypes(resp.data.results)
        }
        apiFetch()
    }, [])

    return (
        <>
            <mainContext.Provider value={{pokemons, setPokemons, types, setTypes, pokemonsBackup, setPokemonsBackup, darkMode, toggleDarkMode}}>
                {children}
            </mainContext.Provider>
        </>
    )
}

export default MainProvider