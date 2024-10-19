import { useState } from 'react'
import './App.css'
import Navbar from './componant/Navbar'
import { Routes, Route, } from 'react-router-dom'
import LikeButton from './componant/LikeButton'
import Form  from './componant/Form'
import UseEffectHooks from './componant/UseEffectHooks'
import UseStateHooks from './componant/UseStateHooks'
import Lottery from './componant/lotteryGame/Lottery'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar />
    <Routes>
      <Route path='/like' element={<LikeButton />} />
      <Route path='/form' element={<Form />} />
      <Route path='/useStateHooks' element={<UseStateHooks />} />
      <Route path='/useEffectHooks' element={<UseEffectHooks />} />
      <Route path='/LotteryGame' element={<Lottery  n={3} winnigSum={15}/>} />
    </Routes>

    </>
  )
}

export default App
