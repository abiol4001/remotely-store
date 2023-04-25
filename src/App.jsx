import {  Routes, Route} from 'react-router-dom'
import './App.css'
import Onboard from './pages/Onboard/Onboard'
import Login from './pages/Login/Login'
import SignUp from './pages/SignUp/SignUp'

function App() {

  return (
   <div className='max-w-[414px] mx-auto'>
      <Routes>
        <Route path='/' element={<Onboard />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<SignUp />} />
      </Routes>
   </div>
  )
}

export default App
