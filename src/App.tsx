import './App.css'
import { Link, Route, Routes } from 'react-router-dom'
import GameGroup from './pages/gameGroup'
import ProductGroup from './pages/productGroup'
import DevGroup from './pages/devGroup'

function App() {
  return (
    <>
      <Link to="/game">Game</Link>
      <br />
      <Link to="/product">Product</Link>
      <br />
      <Link to="/dev">Dev</Link>

      <Routes>
        {/* <Route path='/' element={<PrivateRoute component={<StepHeader />} />}>
        <Route index element={<PrivateRoute component={<BaseInfo />} />}></Route>
        <Route path="/step1" element={<PrivateRoute component={<BaseQuality />} />}> </Route>
      </Route>
      <Route path='/login' element={<Login />}></Route>
      <Route path='/forbidden' element={<Forbidden />}></Route> */}
        <Route path="/game" element={<GameGroup />}></Route>
        <Route path="/product" element={<ProductGroup />}></Route>
        <Route path="/dev" element={<DevGroup />}></Route>
      </Routes>
    </>
  )
}

export default App
