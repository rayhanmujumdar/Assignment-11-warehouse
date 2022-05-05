import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Components/Pages/Home/Home';
import Login from './Components/Pages/Login/Login';
import Signup from './Components/Pages/Signup/Signup';
import Header from './Components/Shared/Header/Header';
import NotFound from './Components/Shared/NotFound/NotFound';
import { Toaster } from 'react-hot-toast';
import PrivateAuth from './Components/Shared/PrivateAuth/PrivateAuth';
import Footer from './Components/Shared/Footer/Footer';
import Profile from './Components/Pages/Profile/Profile';
import Items from './Components/Pages/Items/Items';
import ManageItems from './Components/Pages/ManageItems/ManageItems';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import Inventory from './Components/Pages/Inventory/Invertory';
function App() {
  return (
    <div className='text-center'>
       <Toaster />
      {/* testing route */}
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='home' element={<Home></Home>}></Route>
        <Route path='profile' element={<PrivateAuth>
          <Profile></Profile>
        </PrivateAuth>}></Route>
        <Route path='items' element={
          <PrivateAuth>
            <Items></Items>
          </PrivateAuth>
        }></Route>
        <Route path='manage-items' element={
          <PrivateAuth>
              <ManageItems></ManageItems>
          </PrivateAuth>}></Route>
        <Route path='/inventory/:id' element={
          <PrivateAuth>
              <Inventory></Inventory>
          </PrivateAuth>}></Route>
        <Route path='login' element={<Login></Login>}></Route>
        <Route path='signup' element={<Signup></Signup>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;