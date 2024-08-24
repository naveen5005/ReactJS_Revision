import logo from './logo.svg';
import './App.css';
import {Provider} from 'react-redux';
import UserLoginFunc from './Components/UserLoginFunc';
import { store } from './Store/store';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <UserLoginFunc/>
      </Provider>
    </div>
  );
}

export default App;
