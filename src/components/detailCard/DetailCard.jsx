import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import TypeCard from '../typeCard/TypeCard'
import Pokeball from '../../assets/img/pokeball.png'
import { mainContext } from '../../context/mainProvider'
import './DetailCard.css'

const DetailCard = () => {
    const pokemonNames = useParams()
    const [pokemonDetails, setPokemonDetails] = useState([])
    const {darkMode, toggleDarkMode} = useContext(mainContext)

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
        
        <section className={`secDetails ${darkMode ? 'dark' : 'light'}`}>
            <div className='divDetails'>
                <div className='divNameImg'>
                    {formate()}
                    <div className='test'>
                        <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${pokemonDetails?.data?.id}.png`} alt="" className='imgDetails' />
                        <img src={Pokeball} alt="" className='imgPokeball'/>
                    </div>
                </div>

                <div className='typeSection'>
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
                </div>
                

                <h3 className='detailsHeadline'>Details</h3>
                <hr />
                <div>
                <div className='abilitySection'>
                    <h4>Abilities:</h4>
                    {pokemonDetails?.data?.abilities?.map((abilities, index) => {
                        return(
                            <ul key={index} className='abilityList'>
                                <li>{abilities?.ability?.name}</li>
                            </ul>
                        )
                    })}
                    
                    </div>
        
                </div>
                <hr />
                <div>
                    <div className='healthPoints'>
                    <h4>Health Points: </h4>
                    <div><p>{pokemonDetails?.data?.stats?.[0]?.base_stat}</p></div>
                    </div>
                </div>
                
            </div>
        </section>
    )
}

export default DetailCard