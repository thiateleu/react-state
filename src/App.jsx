import { useState } from 'react'
import Welcome from './components/Welcome';
import Parent from './components/Parent';
import './App.css'

function App() {

  return (
    <>
      <h1>State Examples</h1>
      <Welcome name="Sara" style={{ color: "red" }}/>
      <Welcome name="Bob" style={{ color: "blue" }}/>
      <Welcome name="Scott" style={{ color: "green" }}/>
      <Parent />
    </>
  )
}

export default App