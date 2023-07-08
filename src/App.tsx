import { useState } from 'react'
import './App.css'
import { Leva } from 'leva'
import { Canvas } from '@react-three/fiber'
import { Route, Routes } from 'react-router-dom'
import Test from './pages/test'

function App() {
  return (
    <>
      <Routes>
        {/* <Route path='/' element={<PrivateRoute component={<StepHeader />} />}>
        <Route index element={<PrivateRoute component={<BaseInfo />} />}></Route>
        <Route path="/step1" element={<PrivateRoute component={<BaseQuality />} />}> </Route>
      </Route>
      <Route path='/login' element={<Login />}></Route>
      <Route path='/forbidden' element={<Forbidden />}></Route> */}
        <Route path="/" element={<Test />}></Route>
      </Routes>
    </>
  )
}

export default App
