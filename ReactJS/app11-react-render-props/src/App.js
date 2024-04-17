import logo from './logo.svg';
import './App.css';
import ReUsableClassComp from './Class Components/ReUsableClassComp';
import ParentClassComp from './Class Components/ParentClassComp';
import ReUsableFuncComp from './Func Components/ReUsableFuncComp';
import ParentFuncComp from './Func Components/ParentFuncComp';
import ClassCompCounter from './CounterClassComp/ClassCompCounter';
import ReUsableCounterClass from './CounterClassComp/ReUsableCounterClass';

function App() {
  return (
    <div className="App">
      {/* <ReUsableClassComp render = {(fname,handleFullName)=> <ParentClassComp 
      fname = {fname}
      handleFullName = {handleFullName}/>}/>
      <hr></hr> <hr></hr>
      <ReUsableFuncComp render = {(fname,handleUserNameChange)=> <ParentFuncComp 
      fname = {fname}
      handleUserNameChange = {handleUserNameChange}/>}/> */}

      <ReUsableCounterClass render = {(counter,handleDecrement,handleIncrement,handleReset)=> <ClassCompCounter
      counter = {counter}
      handleIncrement = {handleIncrement}
      handleDecrement = {handleDecrement}
      handleReset = {handleReset}/>}/>
      
    </div>
  );
}

export default App;
