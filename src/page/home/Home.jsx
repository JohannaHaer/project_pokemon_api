import React, { useContext } from 'react'
import axios from 'axios'
import { mainContext } from '../../context/mainProvider'

const Home = () => {
    const {pokemons, setPokemons, urlPokemons, setUrlPokemons} = useContext(mainContext)

    pokemons.map((pokemon) => {
        return(
            setUrlPokemons(pokemon.url)
        )
    })

    console.log(pokemons);
        // useEffect(() => {
    //     const apiFetch = async() => {
    //         const resp = await axios.get(`${}`)
    //         console.log(resp);
    //     }
    //     apiFetch()
    // }, [])

    return (
        <>
            
        </>
    )
}

export default Home