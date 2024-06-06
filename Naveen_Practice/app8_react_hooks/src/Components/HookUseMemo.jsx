import React, { useState, useMemo } from 'react';

const HookUseMemo = () => {
    const[counter,setCounter] = useState(0)
    const [number,setNumber] =useState(1);

    const Factorial = useMemo(()=>{
      return fact(number)
    },[number]);

    // const Factorial = fact(number)

      return (
        <div>
          <p>Counter value is : {counter}</p>
          <button type="button" onClick={()=>setCounter(counter+1)}>increment</button> <br />
          <p>Factorial value is {Factorial} </p>
          <button type="button" onClick={()=>setNumber(number+1)}>Inc Factorial</button>
        </div>
      );
}

const fact =(n) =>{
  let answer=1;
  for(var i=n;i>=1;i--){
    answer = answer * i;
  }
  console.log("Factorial Function called");
  return answer;
}

export default HookUseMemo;
