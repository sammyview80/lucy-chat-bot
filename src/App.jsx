import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import Nav from './Components/Navs/Nav'
import Chat from './Components/Chat/Chat'

function App() {

  return (
    <div className="App">
      <Nav />
      <Chat />
    </div>
  )
}

export default App
