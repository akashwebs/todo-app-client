
import './App.css';
import Navbar from './Shared/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import { ToastContainer } from 'react-toastify';
import Registration from './pages/Login/Registration';
import RequireAuth from './pages/Login/RequireAuth';

function App() {
  return (

    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={
        <RequireAuth>
          <Home></Home>
        </RequireAuth>
        }></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/registration' element={<Registration></Registration>}></Route>
      </Routes>
      <ToastContainer />
    </div>

  );
}

export default App;
