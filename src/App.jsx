import React from 'react'
import Logistic from './components/Logistic/Logistic'
import "./App.scss"
import About from './components/About/About'
import Service from './components/Service/Service'

export default function App() {
  return (
    <div>
      <Logistic/>
      <About/>
      <Service/>
    </div>
  )
}
