import React, { useEffect } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import List from './pages/List'
import Header from './components/header'
import Map from "./pages/map"
import { useDispatch } from 'react-redux'
import { getFlights } from './redux/actions'
import Modal from "./components/modal/index"

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getFlights());
  }, []);

  return (
    <BrowserRouter>
    
    <Header/>
    <main>
    <Routes>
      <Route path='/' element={<Map/>} />
      <Route path='/list' element={<List/>} />
    </Routes>
   <Modal/>
    </main>
    
    </BrowserRouter>
  )
}

export default App
