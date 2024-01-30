import React from 'react'
import { Link } from 'react-router-dom'

const PokemonCard = ({name, id, img}) => {
    return (
        <>
            <Link to={`/detail/${name}`}>
                <div> 
                    <img src={img} alt={name} />
                    <div>
                        <p>#{id}</p>
                        <h2>{name}</h2>
                    </div>
                </div>
            </Link>
        </>
    )
}

export default PokemonCard