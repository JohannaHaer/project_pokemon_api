import React, { createContext, useEffect, useState } from 'react'
import axios from 'axios'
export const mainContext = createContext() 

const MainProvider = ({children}) => {
    const [pokemons, setPokemons] = useState([])
    const [types, setTypes] = useState([])
    const [urlPokemons, setUrlPokemons] = useState([])

    useEffect(() => {
        const apiFetch = async() => {
            const resp = await axios.get("https://pokeapi.co/api/v2/pokemon/?offset=0&limit=1302")
            setPokemons(resp.data.results)
            console.log("Pokemons", pokemons);
        }
        apiFetch()
    }, [])

    // 

    pokemons.map((pokemon) => {
        return(
            urlPokemons.push(pokemon.url)
        )
        
    })

    console.log(urlPokemons);


    useEffect(() => {
        const apiFetch = async() => {
            const resp = await axios.get(`${urlPokemonsArray}`)
            console.log(resp);
        }
        apiFetch()
    }, [])


    useEffect(() => {
        const apiFetch = async() => {
            const resp = await axios.get("https://pokeapi.co/api/v2/type/")
            setTypes(resp.data.results)
            console.log(resp.data.results);
        }
        apiFetch()
    }, [])

    return (
        <>
            <mainContext.Provider value={{pokemons, setPokemons, types, setTypes, urlPokemons, setUrlPokemons}}>
                {children}
            </mainContext.Provider>
        </>
    )
}

export default MainProvider