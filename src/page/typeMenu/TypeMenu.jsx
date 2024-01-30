import React, { useContext } from 'react'
import { mainContext } from '../../context/mainProvider'
import TypeCard from '../../components/typeCard/TypeCard';

const TypeMenu = () => {
  const {types, setTypes, pokemons, setPokemons} = useContext(mainContext)
  
  console.log("types", types);
  return (
    <>
      {types.map((type, index) => {
        return(
          <TypeCard
            type={type.name}
            id={index+1}
          />
        )
      })}
    </>
  )
}

export default TypeMenu