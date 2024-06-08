import logo from './logo.svg';
import './App.css';
import HookUseMemo from './Components/HookUseMemo';
import HookUseCallback from './Components/HookUseCallback';
import HookUseRef from './Components/HookUseRef';

function App() {
  return (
    <div className="App">
      {/* <HookUseMemo/> */}
      {/* <HookUseCallback/> */}
      <HookUseRef/>
    </div>
  );
}

export default App;
