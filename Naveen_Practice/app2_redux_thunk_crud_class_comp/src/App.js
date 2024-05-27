import logo from './logo.svg';
import './App.css';
import UsersClassComp from './Components/UsersClassComp';
import { Provider } from "react-redux";
import { store } from './Store/store';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <UsersClassComp/>
      </Provider>
    </div>
  );
}

export default App;
