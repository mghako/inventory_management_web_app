import { AuthProvider } from '../context/AuthContext';
import Register from '../pages/Register';
import './App.css';

function App() {
  return (
    <AuthProvider>
      <Register />
    </AuthProvider>
  );
}

export default App;
