import {Provider} from 'react-redux';
import './App.css';
import { store } from './Store/store';
import UserLogin from './Components/UserLogin';

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
