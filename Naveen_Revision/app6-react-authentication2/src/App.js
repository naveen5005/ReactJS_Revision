import logo from './logo.svg';
import './App.css';
import Login from './Components/Login';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Main from './Components/Main';
import Products from './Components/Products';
import AuthContext from './Components/AuthContext';
import ProtectedRoute from './Components/ProtectedRoute';

function App() {
  return (
    <div className="App">
      <Router>
        <AuthContext>
          <Routes>
            <Route path='/login' element={<Login />} />
            <Route path='/' element={<ProtectedRoute>
              <Main />
            </ProtectedRoute>} />
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
