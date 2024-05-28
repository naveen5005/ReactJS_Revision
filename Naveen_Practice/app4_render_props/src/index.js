import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import ClickCounterFunc from './Components/Functional/ClickCounterFunc';
import HoverCounterFunc from './Components/Functional/HoverCounterFunc';
import Reusable_Func from './Components/Functional/Reusable_Func';
import ReUsable_Class from './Components/Class/ReUsable_Class';
import ClickCounterClass from './Components/Class/ClickCounterClass';
import HoverCounterClass from './Components/Class/HoverCounterClass';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <ClickCounterFunc/>
    <HoverCounterFunc/> */}

    <h2>Welcome to Functional Components</h2>
    <Reusable_Func render={(counter, incrementCounter, decrementCounter, resetCounter) => {
      return (
        <ClickCounterFunc
          counter={counter}
          incrementCounter={incrementCounter}
          decrementCounter={decrementCounter}
          resetCounter={resetCounter}
        />
      )
    }} />

    <Reusable_Func render={(counter, incrementCounter, decrementCounter, resetCounter) => {
      return (
        <HoverCounterFunc
          counter={counter}
          incrementCounter={incrementCounter}
          decrementCounter={decrementCounter}
          resetCounter={resetCounter}
        />
      )
    }} />
    <hr></hr>
    <h2>Welcome to Class Components</h2>
    <ReUsable_Class
      render = {(counter,incrementCounter,decrementCounter,resetCounter)=>{
        return(
          <ClickCounterClass
            counter = {counter}
            incrementCounter ={incrementCounter}
            decrementCounter = {decrementCounter}
            resetCounter = {resetCounter}
          />
        )
      }}
    />
    <ReUsable_Class
      render = {(counter,incrementCounter,decrementCounter,resetCounter)=>
      <HoverCounterClass
        counter = {counter}
        incrementCounter = {incrementCounter}
        decrementCounter = {decrementCounter}
        resetCounter = {resetCounter}
      />}
    />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
