import React from 'react'
import { Link } from 'react-router-dom'

const TypeCard = ({type, id}) => {
    return (
        <Link to={`/typeresults/${id}`}>
            <button>{type}</button>
        </Link>
    )
}

export default TypeCard