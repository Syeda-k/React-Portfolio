import { useState } from 'react'
import Nav from './Components/Nav/NAV'
import './App.css'
import Header from './Components/Nav/Header/Header'
import About from './Components/About/About'
import Service from './Components/Service/Service'
import Contact from './Components/Contact/Contact'



function App() {
  const [count, setCount] = useState(0)
  return (
    <>
      <Nav/>
    <Header/>
    <About/>
    <Service/>
    <Contact/>
    </>
  )
}

export default App
