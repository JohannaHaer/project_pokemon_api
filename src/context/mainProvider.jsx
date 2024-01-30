import React, { createContext, useEffect, useState } from 'react'
import axios from 'axios'
export const mainContext = createContext() 

const MainProvider = ({children}) => {
    const [pokemon, setPokemon] = useState([])

    useEffect(() => {
        const apiFetch = async() => {
            const resp = await axios.get("https://pokeapi.co/api/v2/pokemon/?offset=0&limit=1302")
            console.log(resp.data.results);
            setPokemon(resp.data.results)
            
        }
        apiFetch()
    }, [])


    // useEffect(() => {
    //     const apiFetch = async() => {
    //         const resp = await axios.get(`${}`)
    //         console.log(resp);
    //     }
    //     apiFetch()
    // }, [])

    return (
        <>
            <mainContext.Provider value={{pokemon, setPokemon}}>
                {children}
            </mainContext.Provider>
        </>
    )
}

export default MainProvider