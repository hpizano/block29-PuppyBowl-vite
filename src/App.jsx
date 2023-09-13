import Nav from './components/NavBar'
import AllPlayers from './components/AllPlayers'
import SinglePlayers from './components/SinglePlayer'
import Homepage from './components/HomePage'
import { Routes, Route } from 'react-router-dom'

import './App.css'

function App() {

  return (
    <>
     <Nav/>
        <Routes>
           <Route path='/' element= {<Homepage />} />
           <Route path='/players' element= {<AllPlayers />} />
           <Route path='/players/:id' element= {<SinglePlayers />} /> 
        </Routes>
    </>
  )
}

export default App
