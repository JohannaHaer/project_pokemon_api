import React from 'react'
import { Link } from 'react-router-dom'

const TypeCard = ({type, id}) => {

    return (
        <Link to={`/typeresults/${type}`}>
            <button className={type}>{type}</button>
        </Link>
    )
}

export default TypeCard