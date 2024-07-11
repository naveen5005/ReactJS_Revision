import logo from './logo.svg';
import './App.css';
import UsersFuncComp from './Components/UsersFuncComp';
import { Provider } from "react-redux";
import { store } from './Store/store';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <UsersFuncComp />
      </Provider>
    </div>
  );
}

export default App;
