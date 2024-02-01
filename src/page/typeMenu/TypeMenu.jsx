import React, { useContext } from 'react'
import { mainContext } from '../../context/mainProvider'
import TypeCard from '../../components/typeCard/TypeCard';
import { Link } from 'react-router-dom'
import logo from '../../assets/img/logo.png'

const TypeMenu = () => {
  const {types, setTypes, pokemons, setPokemons, darkMode, toggleDarkMode} = useContext(mainContext)
  
  // console.log("types", types);
  return (
    <section className={`secTypePage ${darkMode ? 'dark' : 'light'}`}>
      <Link to='/'><img src={logo} alt="Pokémon Logo" /></Link>
      <h2 className='h2TypePage'>TYPE</h2>
      <div className='divTypePage'>
        {types.map((type, index) => {
          return(
            <div key={index}>
              <TypeCard
                type={type.name}
                id={index+1}
              />
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default TypeMenu