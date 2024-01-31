import React from 'react'
import { Link } from 'react-router-dom'

const PokemonCard = ({name, id, img}) => {

    const formate = () => {
        if(id < 10) {
            return(
                <p>#00{id}</p>
            )
        } else if (id >= 10 && id < 100) {
            return(
                <p>#0{id}</p>
            )
        } else {
            return(
                <p>#{id}</p>
            )
        }
    }
    
    return (
        <>
            <Link to={`/detail/${name}`}>
                <div> 
                    <img src={img} alt={name} />
                    <div>
                        {formate()}
                        <h2>{name}</h2>
                    </div>
                </div>
            </Link>
        </>
    )
}

export default PokemonCard