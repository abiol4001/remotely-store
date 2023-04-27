import {  Routes, Route} from 'react-router-dom'
import './App.css'
import Onboard from './pages/Onboard/Onboard'
import Login from './pages/Login/Login'
import SignUp from './pages/SignUp/SignUp'
import Home from './pages/Home/Home'
import ViewItem from './pages/ViewItem/ViewItem'
import Search from './pages/Search/Search'
import Workspaces from './pages/Workspaces/Workspaces'


function App() {

  return (
   <div className='max-w-[414px] mx-auto'>
      <Routes>
        <Route path='/' element={<Onboard />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<SignUp />} />
        <Route path='/home' element={<Home />} />
        <Route path='/viewitem' element={<ViewItem />} />
        <Route path='/search' element={<Search />} />
        <Route path='/workspaces' element={<Workspaces />} />
      </Routes>
   </div>
  )
}

export default App
