import './App.css';
import AuthContext from './Components/AuthContext';
import Login from './Components/Login';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProtectedRoute from './Components/ProtectedRoute';
import Users from './Components/Users';
import UserDetails from './Components/UserDetails';

function App() {
  return (
    <div className="App">
      <Router>
        <AuthContext>
          <Routes>
            <Route path='/' element={<Login/>} />
            <Route path='/users' element={<ProtectedRoute>
              <Users />
            </ProtectedRoute>} />
            <Route path='/users/:id' element={<UserDetails/>}/>
          </Routes>
        </AuthContext>
      </Router>
    </div>
  );
}

export default App;
