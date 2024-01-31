import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import TypeCard from '../typeCard/TypeCard'

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
   
    // console.log("pokemonDetails", pokemonDetails);

    const formate = () => {
        if(pokemonDetails?.data?.id < 10) {
            return(
                <h2>#00{pokemonDetails?.data?.id} {pokemonDetails?.data?.name}</h2>
            )
        } else if (pokemonDetails?.data?.id >= 10 && pokemonDetails?.data?.id < 100) {
            return(
                <h2>#0{pokemonDetails?.data?.id} {pokemonDetails?.data?.name}</h2>
            )
        } else {
            return(
                <h2>#{pokemonDetails?.data?.id} {pokemonDetails?.data?.name}</h2>
            )
        }
    }

    return (
        <>
            <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${pokemonDetails?.data?.id}.png`} alt="" />
            {formate()}
            {pokemonDetails?.data?.types.map((type, index) => {
                console.log("gib mir die types", type);
                return(
                    <div key={index}>
                        <TypeCard
                            type={type?.type?.name}
                        />
                    </div>
                )
            })}
            <h3>Details</h3>
            <div>
                <h4>Abilities</h4>
                {pokemonDetails?.data?.abilities?.map((abilities, index) => {
                    return(
                        <ul key={index}>
                            <li>{abilities?.ability?.name}</li>
                        </ul>
                    )
                })}
            </div>
            <div>
                <h4>Health Points</h4>
                <div><p>{pokemonDetails?.data?.stats?.[0]?.base_stat}</p></div>
            </div>
        </>
    )
}

export default DetailCard