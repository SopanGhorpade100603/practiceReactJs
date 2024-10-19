import { useState } from 'react'
import './App.css'
import Navbar from './componant/Navbar'
import { Routes, Route, } from 'react-router-dom'
import LikeButton from './componant/LikeButton'
import Form  from './componant/Form'
import UseEffectHooks from './componant/UseEffectHooks'
import UseStateHooks from './componant/UseStateHooks'
import Lottery from './componant/lotteryGame/Lottery'
import FirstPage from './componant/FirstPage'
import CommentForm from './componant/CommentForm'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar />
    <h1></h1>
    <Routes>
      <Route path='/'element={<FirstPage />} />
      <Route path='/like' element={<LikeButton />} />
      <Route path='/form' element={<Form />} />
      <Route path='/commentform' element={<CommentForm />} />
      <Route path='/useStateHooks' element={<UseStateHooks />} />
      <Route path='/useEffectHooks' element={<UseEffectHooks />} />
      <Route path='/LotteryGame' element={<Lottery  n={3} winnigSum={15}/>} />
    </Routes>

    </>
  )
}

export default App
