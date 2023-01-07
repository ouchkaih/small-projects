import { React } from 'react'
import Nav from './components/nav'
import { Route, Router, Routes } from 'react-router-dom'
import Controler from './components/Controler'
import Weather from './components/Weather'
import Items from './components/items'
import Questions from './components/questions'
import Notes from './components/Notes'

function App() {
  return (
    <div className="app ">
      <Nav />
      <Routes>
        <Route path="/" element={<Controler />} />
        <Route path="/weather" element={<Weather />} />
        <Route path="/items" element={<Items />} />
        <Route path="/questions" element={<Questions />} />
        <Route path="/notes" element={<Notes />} />
      </Routes>
    </div>
  )
}

export default App
