import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
import Login from './Components/Login';
import Products from './Components/Products';
import AuthContext from './Components/AuthContext';
import ProtectedRoute from './Components/ProtectedRoute';

function App() {
  return (
    <div className="App">
      <Router>
        <AuthContext>
          <Routes>
            <Route path='/' element={<ProtectedRoute>
              <Home />
            </ProtectedRoute>} />
            <Route path='/login' element={<Login />} />
            <Route path='/products' element={<Products />} />
          </Routes>
        </AuthContext>
      </Router>
    </div>
  );
}

export default App;
