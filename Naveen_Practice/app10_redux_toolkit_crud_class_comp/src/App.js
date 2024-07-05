import {Provider} from 'react-redux'
import './App.css';
import { store } from './Store/store';
import Users from './Components/Users';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Users/>
      </Provider>
    </div>
  );
}

export default App;
