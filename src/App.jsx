import { useState,useEffect } from 'react'

import './App.css'
import Home from './layout/Applayout/Home'
import axios from 'axios'
import Header from './components/Header/Header'
import Navbar from './components/Nav/Navbar'
import Login from './pages/Login'
import { BrowserRouter } from 'react-router-dom'
import { UiContextProvider } from './UiContext'
import Approutes from './Router/Approutes'
import Modal from './components/Modal/Modal'
import ToastMessage from './components/ToastMessage/ToastMessage'

function App() {
 
  

  return (
      <> 
          <BrowserRouter>
        <UiContextProvider>
          <Approutes />
          <Modal/>
          <ToastMessage/>
        </UiContextProvider>
      </BrowserRouter>
    </>
  )
}

export default App
