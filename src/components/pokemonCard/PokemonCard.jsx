import React from 'react'
import { Link } from 'react-router-dom'

const PokemonCard = ({name, id, img}) => {

    const formate = () => {
        if(id < 10) {
            return(
                <p className='fontPreview'>#00{id}</p>
            )
        } else if (id >= 10 && id < 100) {
            return(
                <p className='fontPreview'>#0{id}</p>
            )
        } else {
            return(
                <p className='fontPreview'>#{id}</p>
            )
        }
    }
    
    return (
        <>
            <Link to={`/detail/${name}`}>
                <div className='pokemonPreview'> 
                    <div className='imgDivPreview'><img src={img} alt={name} className='imgPreview'/></div>
                    <div className='pokemonPreviewDescript'>
                        {formate()}
                        <h2 className='fontPreview'>{name}</h2>
                    </div>
                </div>
            </Link>
        </>
    )
}

export default PokemonCard