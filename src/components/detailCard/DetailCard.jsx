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
            // console.log("resp",resp);
        }
        {pokemonNames.name ? apiFetch() : null}
    }, [pokemonNames.name])
   
    // console.log("pokemonDetails", pokemonDetails);

    const formate = () => {
        if(pokemonDetails?.data?.id < 10) {
            return(
                <div className='pokeName'>
                    <h2 className='fontName'>{pokemonDetails?.data?.name}</h2>
                    <p className='fontName'>#00{pokemonDetails?.data?.id}</p>
                </div>
            )
        } else if (pokemonDetails?.data?.id >= 10 && pokemonDetails?.data?.id < 100) {
            return(
                <div className='pokeName'>
                    <h2 className='fontName'>{pokemonDetails?.data?.name}</h2>
                    <p className='fontName'>#0{pokemonDetails?.data?.id}</p>
                </div>
            )
        } else {
            return(
                <div className='pokeName'>
                    <h2 className='fontName'>{pokemonDetails?.data?.name}</h2>
                    <p className='fontName'>#{pokemonDetails?.data?.id}</p>
                </div>
            )
        }
    }

    return (
        <section className='secDetails'>
            <div className='divDetails'>
                <div className='divNameImg'>
                    {formate()}
                    <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${pokemonDetails?.data?.id}.png`} alt="" className='imgDetails' />
                </div>
                {pokemonDetails?.data?.types.map((type, index) => {
                    // console.log("gib mir die types", type);
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
            </div>
        </section>
    )
}

export default DetailCard