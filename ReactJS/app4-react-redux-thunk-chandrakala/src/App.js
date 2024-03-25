import logo from './logo.svg';
import './App.css';
import Users from './Components/Users';
import { useSelector } from 'react-redux';

function App() {

 const storeUserDetails = useSelector((state)=>{
    return state.users;
  })
  console.log(storeUserDetails)
  return (
    <div className="App">
      <Users/>
    </div>
  );
}

export default App;
