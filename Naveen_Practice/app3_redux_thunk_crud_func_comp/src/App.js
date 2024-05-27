import logo from './logo.svg';
import './App.css';
import UserFuncComp from './Components/UserFuncComp';
import {Provider} from 'react-redux'
import { store } from './Store/store';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <UserFuncComp/>
      </Provider>
    </div>

  );
}

export default App;
