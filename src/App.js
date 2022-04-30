import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Components/Pages/Home/Home';
import Header from './Components/Shared/Header/Header';

function App() {
  return (
    <div className='text-center'>
      <Header></Header>
      <Routes>
        <Route path='home' element={<Home></Home>}></Route>
      </Routes>
    </div>
  );
}

export default App;