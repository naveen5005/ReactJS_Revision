import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './Components/Home';
import AuthContext from './Components/AuthContext';
import Login from './Components/Login';
import ProtectedRoute from './Components/ProtectedRoute';
import Products from './Components/Products';

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
            <Route path='/products' element={<ProtectedRoute>
              <Products />
            </ProtectedRoute>} />
          </Routes>
        </AuthContext>
      </Router>
    </div>
  );
}

export default App;
