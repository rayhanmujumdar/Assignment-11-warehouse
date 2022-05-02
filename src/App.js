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
        <Route path='login' element={<Login></Login>}></Route>
        <Route path='signup' element={<Signup></Signup>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;