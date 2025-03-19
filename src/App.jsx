import { useState } from 'react'
import Header from './components/Header'
import Weather from './components/Weather'
import './App.css'

function App() {
  const [num, setCount] = useState(0)
  const [text,setText] = useState("")

  return (
    <>
      
        <Header/>
        <Weather/>
        {/* <input
        type='text'
        placeholder='enter some text here'
      value= {text}
      onChange={(e)=>{setText(e.target.value)}}
        />
        <h2>you typed: {text}</h2>
        <h1>Count = {num}</h1>
        <button onClick={()=>{setCount(num+1)} }>Increase</button>
      <h3>Hello Ritik Welcome to React with vite</h3> */}
    </>
  )
}

export default App
