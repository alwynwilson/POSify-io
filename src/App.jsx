import Home from './pages/home/Home'
import Login from './pages/login/Login'
import { Route,Routes } from "react-router-dom";
import Profile from './pages/Profile/Profile'
import AdSettings from './pages/AdSettings/AdSettings'
import AddSale from './pages/AddSale/AddSale'
import AddPurchase from './pages/AddPurchase/AddPurchase'
import ListSale from './pages/ListSale/ListSale';
import ListProduct from './pages/ListProduct/ListProduct';
import ListPurchase from './pages/ListPurchase/ListPurchase'
import AddProduct from './pages/AddProduct/AddProduct';

function App() {

  return (
    <div className='App'>
        <Routes>
          <Route path='/' element={<Login/>} />
          <Route path='/dashboard' element={<Home/>} /> 
          <Route path='/listsale' element={<ListSale/>} />
          <Route path='/purchase' element={<ListPurchase/>} />
          <Route path='/products' element={<ListProduct/>} />
          <Route path='/profile' element={<Profile/>} />
          <Route path='/adsettings' element={<AdSettings/>} />
          <Route path='/addsale' element={<AddSale/>} />
          <Route path='/addpurchase' element={<AddPurchase/>} />
          <Route path='/addproduct' element={<AddProduct/>} />
          <Route path='/*' element={<Login/>} />
        </Routes>
    </div>
  )
}

export default App
