// import React,{useState,useEffect} from 'react'
// import './App.css';

// const App = () => {
    
//     var BMIValuue = 0;
//     const [hight, sethight] = useState(100);
//     const [weight, setweight] = useState(70);
//     const [BMI, setBMI] = useState(0);

//     function onHightChange(Event){
//         sethight(Event.target.value);
//     }
//     function onWeightChange(Event){
//         setweight(Event.target.value);
//     }
//     var calculateBMI = (hight,weight) =>{
//         hight = hight/100;
//         var hightInM = hight*hight;
//         return (weight/hightInM);
//     }
//     useEffect(() => {
//         var val = calculateBMI(hight,weight);
//         setBMI(val.toFixed(2));
        
//     }, [hight,weight])
    
    
//   return (
//     <div>
       
//         <br />
//         <input type="range" id="hight" name="hight" list="values" min={40} max={200} step="1" onChange={onHightChange} />{hight}
//         <label htmlFor="hight">Hight in cm</label>
        
//         {/* <datalist id="values">
//         <option value="0" label="0"></option>
//         <option value="25" label="25"></option>
//         <option value="50" label="50"></option>
//         <option value="75" label="75"></option>
//         <option value="100" label="100"></option>
//         <option value="125" label="125"></option>
//         <option value="150" label="150"></option>
//         <option value="175" label="175"></option>
//         <option value="200" label="200"></option>
//         </datalist> */}
//         <br/>
//        <input type="range" id="weight" name="weight" min="0" max="150" onChange={onWeightChange} />{weight}
//         <label for="weight">Weight in Kg</label>
//         <h1>{BMI}</h1>
//     </div>
//   )
// }

// export default App
import React, { useState, useEffect } from 'react';
import './App.css';

const App = () => {
  const [heightInCm, setHeightInCm] = useState(100);
  const [weightInKg, setWeightInKg] = useState(70);
  const [bmi, setBmi] = useState(0); // Store BMI state for display

  const calculateBmi = (height, weight) => {
    if (height === 0 || weight === 0) {
      return 0; // Handle division by zero
    }
    const heightInMeters = height / 100;
    return weight / (heightInMeters * heightInMeters);
  };

  useEffect(() => {
    const newBmi = calculateBmi(heightInCm, weightInKg);
    setBmi(newBmi.toFixed(2)); // Round to two decimal places
  }, [heightInCm, weightInKg]); // Update BMI on height or weight change

  const onHeightChange = (event) => {
    setHeightInCm(parseInt(event.target.value));
  };

  const onWeightChange = (event) => {
    setWeightInKg(parseFloat(event.target.value));
  };

  return (
    <div className="App">
      <br />
      <input
        type="range"
        id="height"
        name="height"
        min={40}
        max={200}
        step="1"
        onChange={onHeightChange}
        value={heightInCm} // Set initial value for range slider
      />
      {heightInCm} cm
      <label htmlFor="height">Height in cm</label>
      <br />

      <input
        type="range"
        id="weight"
        name="weight"
        min="0"
        max="150"
        step="0.1"  // Allow for finer weight input (optional)
        onChange={onWeightChange}
        value={weightInKg} // Set initial value for range slider
      />
      {weightInKg.toFixed(1)} kg  {/* Display weight with one decimal place */}
      <label htmlFor="weight">Weight in Kg</label>
      <br />

      <h1>Your BMI: {bmi}</h1>
    </div>
  );
};

export default App;
