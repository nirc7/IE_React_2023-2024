import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HobbyContextProvider from './HobbyContextProvider'
import AddHobby from './AddHobby'
import HobbiesList from './HobbiesList'

function App() {

  return (
    <>
      <HobbyContextProvider>
        <AddHobby />
        <HobbiesList />
      </HobbyContextProvider>
    </>
  )
}

export default App
