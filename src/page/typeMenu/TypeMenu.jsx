import React, { useContext } from 'react'
import { mainContext } from '../../context/mainProvider'

const TypeMenu = () => {
  const {types, setTypes, pokemons, setPokemons} = useContext(mainContext)
  console.log("types", types);
  return (
    <>
      
    </>
  )
}

export default TypeMenu