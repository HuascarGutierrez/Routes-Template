import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Template from './Template'
import HomeD from './HomeD'
import HomeT from './HomeT'
import HOmeH from './HOmeH'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path='/' element={<Template/>}></Route>
        <Route path='/about' element={<HomeT/>}></Route>
        <Route path='/home' element={<HOmeH/>}></Route>
        <Route path='/dashboard' element={<HomeD/>}></Route>
      </Routes>
    </>
  )
}

export default App
