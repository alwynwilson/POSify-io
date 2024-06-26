import Home from './pages/home/Home'
import Login from './pages/login/Login'
import List from './pages/list/List'
import Single from './pages/single/Single'
import New from './pages/new/New'
import { Route,Routes } from "react-router-dom";
import Profile from './pages/Profile/Profile'
import Logout from './pages/logout/Logout'


function App() {

  return (
    <div className='App'>
        <Routes>
          <Route path='/' element={<Login/>} />
          <Route path='/dashboard' element={<Home/>} /> 
          <Route path='/sale' element={<List/>} />
          <Route path='/purchase' element={<Single/>} />
          <Route path='/products' element={<List/>} />
          <Route path='/profile' element={<Profile/>} />
          <Route path='/logout' element={<Logout/>} />
          <Route path='/user/:userId/new' element={<New/>} />
        </Routes>
    </div>
  )
}

export default App
