
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './page/home/Home'
import PokemonDetails from './page/pokemonDetails/PokemonDetails'
import TypeMenu from './page/typeMenu/TypeMenu'
import TypeResults from './page/typeResults/TypeResults'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/detail/:name' element={<PokemonDetails/>}/>
        <Route path='/menu' element={<TypeMenu/>}/>
        <Route path='/typeresults/:type' element={<TypeResults/>}/>
      </Routes>
    </>
  )
}

export default App
