import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Main from './Components/Main';
import Products from './Components/Products';
import Users from './Components/Users';
import AuthContext from './Components/AuthContext';
import ProtectedRoute from './Components/ProtectedRoute';

function App() {
  return (
    <div className="App">
      <Router>
        <AuthContext>
          <Routes>
            <Route path='/main' element={<ProtectedRoute><Main /></ProtectedRoute>} />
            <Route path='/product' element={<ProtectedRoute><Products /></ProtectedRoute>} />
            <Route path='/' element={<Users />} />
          </Routes>
        </AuthContext>
      </Router>
    </div>
  );
}

export default App;
