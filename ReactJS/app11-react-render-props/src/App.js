import logo from './logo.svg';
import './App.css';
import ReUsableClassComp from './Class Components/ReUsableClassComp';
import ParentClassComp from './Class Components/ParentClassComp';
import ReUsableFuncComp from './Func Components/ReUsableFuncComp';
import ParentFuncComp from './Func Components/ParentFuncComp';

function App() {
  return (
    <div className="App">
      <ReUsableClassComp render = {(fname,handleFullName)=> <ParentClassComp 
      fname = {fname}
      handleFullName = {handleFullName}/>}/>
      <hr></hr> <hr></hr>
      <ReUsableFuncComp render = {(fname,handleUserNameChange)=> <ParentFuncComp 
      fname = {fname}
      handleUserNameChange = {handleUserNameChange}/>}/>
    </div>
  );
}

export default App;
