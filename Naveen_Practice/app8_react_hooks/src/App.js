import logo from './logo.svg';
import './App.css';
import HookUseMemo from './Components/HookUseMemo';
import HookUseCallback from './Components/HookUseCallback';

function App() {
  return (
    <div className="App">
      {/* <HookUseMemo/> */}
      <HookUseCallback/>
    </div>
  );
}

export default App;
