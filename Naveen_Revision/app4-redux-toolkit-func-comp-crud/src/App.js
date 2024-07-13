import logo from './logo.svg';
import './App.css';
import UsersFunComp from './Components/UsersFunComp';
import { Provider } from 'react-redux';
import { store } from './Store/store';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <UsersFunComp/>
      </Provider>
    </div>
  );
}

export default App;
