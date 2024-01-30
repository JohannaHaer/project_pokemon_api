import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const DetailCard = () => {
    const pokemonNames = useParams()
    const [pokemonDetails, setPokemonDetails] = useState([])

    useEffect(() => {
        const apiFetch = async() => {
            const resp = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonNames.name}`)
            setPokemonDetails(resp)
            console.log("resp",resp);
        }
        {pokemonNames.name ? apiFetch() : null}
    }, [pokemonNames.name])
   
    console.log("pokemonDetails", pokemonDetails);
    return (
        <>
            <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${pokemonDetails?.data?.id}.png`} alt="" />
            <h2>#{pokemonDetails?.data?.id} {pokemonDetails?.data?.name}</h2>
            {/* {pokemonDetails.map((type, index) => {
                
                return(
                    <div key={index}>

                    </div>
                )
            })} */}
        </>
    )
}

export default DetailCard