import logo from './logo.svg';
import './App.css';
import { Persons } from './Components/Persons';
import {Provider} from 'react-redux';
import { store } from './Store/store';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Persons/>
      </Provider>
    </div>
  );
}

export default App;
