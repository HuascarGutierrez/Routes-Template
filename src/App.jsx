import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Template from './Template'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>

        <Route path='/' element={<template/>}></Route>
        <Route path='/about' element={<HomeT/>}></Route>
        <Route path='/home' element={<HomeH/>}></Route>
        <Route path='/dashboard' element={<HomeD/>}></Route>
      </Routes>
    </>
  )
}

export default App
