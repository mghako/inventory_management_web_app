import { AuthProvider } from '../context/AuthContext';
import Register from '../pages/Register';
import './App.css';
import { Routes, Route } from "react-router-dom";
import Login from '../pages/Login';
import RequireAuth from './Auth/RequireAuth';
import PublicAuth from './Auth/PublicAuth';
import Items from '../pages/Items';
import Layout from '../pages/Layout';

function App() {
  return (
    <AuthProvider>
        <Routes>
          <Route exact path='/' element={
            <RequireAuth>  
              <Layout/>
            </RequireAuth>
            }
          />
          <Route path="/register" element={
            <PublicAuth>
              <Register />
            </PublicAuth>
            } 
          />
          <Route path="/login" element={
            <PublicAuth>
              <Login />
            </PublicAuth>
            } 
          />
          <Route exact path='/items' element={
            <RequireAuth>  
              <Items/>
            </RequireAuth>
            }
          />
        </Routes>
    </AuthProvider>
  );
}

export default App;
