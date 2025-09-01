import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './Components/Home'
import { Route, Routes } from 'react-router-dom'
import Editor from './Components/Editor'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Routes>
      <Route path='/' element = {<Home />} />
      <Route path='/editor/:roomId' element = {<Editor/>} />
    </Routes>
  )
}

export default App
