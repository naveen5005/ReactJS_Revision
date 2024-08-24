import logo from './logo.svg';
import './App.css';
import Reusable from './Components/Reusable';
import ClickCounter from './Components/ClickCounter';
import HoverCounter from './Components/HoverCounter';

function App() {
  return (
    <div className="App">
      <Reusable render={(counter, handleIncrement, handleDecrement, handleReset) => {
        return (
          <ClickCounter
            counter={counter}
            handleDecrement={handleDecrement}
            handleIncrement={handleIncrement}
            handleReset={handleReset}
          />
        )
      }} />
      <hr/>
      <Reusable render={(counter, handleIncrement, handleDecrement, handleReset) => {
        return (
          <HoverCounter
            counter={counter}
            handleDecrement={handleDecrement}
            handleIncrement={handleIncrement}
            handleReset={handleReset}
          />
        )
      }} />
    </div>
  );
}

export default App;
