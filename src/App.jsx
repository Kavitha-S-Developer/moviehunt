import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Footer, Header } from './components'
import {AllRoutes }from './routes/AllRoutes'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
       <Header/>
       <AllRoutes/>
       <Footer/>
      </div>
      
    </>
  )
}

export default App
