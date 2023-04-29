import {  Routes, Route} from 'react-router-dom'
import './App.css'
import Onboard from './pages/Onboard/Onboard'
import Login from './pages/Login/Login'
import SignUp from './pages/SignUp/SignUp'
import Home from './pages/Home/Home'
import ViewItem from './pages/ViewItem/ViewItem'
import Search from './pages/Search/Search'
import Workspaces from './pages/Workspaces/Workspaces'
import Workspace from './pages/Workspaces/Workspace'
import Scanning from './pages/Scanning/Scanning'
import ScannedInfo from './pages/Scanning/ScannedInfo'
import Cart from './pages/Cart/Cart'
import Checkout from './pages/Checkout/Checkout'
import Done from './pages/Done/Done'
import Orders from './pages/Orders/Orders'


function App() {

  return (
   <div className='max-w-[414px] mx-auto'>
      <Routes>
        <Route path='/' element={<Onboard />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<SignUp />} />
        <Route path='/home' element={<Home />} />
        <Route path='/viewitem' element={<ViewItem />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/checkout' element={<Checkout />} />
        <Route path='/order-confirmed' element={<Done />} />
        <Route path='/orders' element={<Orders />} />
        <Route path='/search' element={<Search />} />
        <Route path='/scanning' element={<Scanning />}/>
        <Route path='/scannedinfo' element={<ScannedInfo />}/>
        <Route path='/workspaces' element={<Workspaces />}/>
        <Route path='/workspaces/:id' element={<Workspace />}/>
      </Routes>
   </div>
  )
}

export default App
