import React,{useState} from "react";
import './App.css';

function App() {
  const [heightInCm, setHeightInCm]=useState(0);
  const [heightInMe, setHeightinMe]=useState(0);
  const [heightInMm, setHeightinMm]=useState(0);
  const [heightInFe, setHeightinFe]=useState(0);
  const [heightInCh, setHeightinCh]=useState(0);


  const calculate=(e)=>{
    e.preventDefault();
    const formValid=+heightInCm>=0;
    if (!formValid){
      return;
    }
    setHeightinMe(+heightInCm/100);
    setHeightinMm(+heightInCm*10);
    setHeightinFe(+heightInCm*0.33)
    setHeightinCh(+heightInCm/2.54)
  }

  return (
    <div className="App">
      <div className='form_header'>
        <h1>My Height converter</h1>
        <h6>...simple, easy and accurate</h6>
      <form onSubmit={calculate}>
        <div>
          <label className='labelName'>Height in Centimeters</label>
          <input 
          value={heightInCm}
          onChange={(e)=>setHeightInCm(e.target.value)}
          className='textInput'/>
        </div>
        <button type="submit" className='convert_button'>convert</button>
      </form>
      
      <div className="display_text">{heightInMe} m</div>
      <div className='display_text'>{heightInMm} mm</div>
      <div className='display_text'>{heightInFe} ft</div>
      <div className='display_text'>{heightInCh} In</div>
      
      </div>
  
    </div>
  );
}

export default App;
