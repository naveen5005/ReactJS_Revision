import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux'
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
