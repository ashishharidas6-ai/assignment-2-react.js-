import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/class/header'
import Counter from './components/functional/counter'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
       <Header />
       <Counter />
        
      </div>
    </>
  )
}

export default App
