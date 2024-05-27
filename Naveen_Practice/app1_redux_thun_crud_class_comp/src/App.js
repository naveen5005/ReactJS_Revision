import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux';
import Users from './Components/Users';
import { store } from './Store/store';

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
