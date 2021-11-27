import { AuthProvider } from '../context/AuthContext';
import Register from '../pages/Register';
import './App.css';
import { Routes, Route } from "react-router-dom";
import Login from '../pages/Login';
import Dashboard from '../pages/Dashboard';
import RequireAuth from './RequireAuth';

function App() {
  return (
    
    <AuthProvider>
        <Routes>
          <Route exact path='/' element={<RequireAuth/>}>
            <Route exact path='/' element={<Dashboard/>}/>
          </Route>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Routes>
    </AuthProvider>
    
  );
}

export default App;
