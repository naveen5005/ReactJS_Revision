import logo from './logo.svg';
import './App.css';
import UserLogin from './Components/UserLogin';
import {Provider} from 'react-redux';
import { store } from './Store/store';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <UserLogin/>
      </Provider>
    </div>
  );
}

export default App;
