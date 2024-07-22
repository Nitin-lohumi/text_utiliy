import './App.css';
import { useEffect, useState } from 'react';
function App() {
  const [change, setChange] = useState();
  const [text, setText] = useState("");
  const [submitText,setSubmit] = useState();
  function uppercase(){
    let upper = text.toUpperCase();
    setText(upper);
    setChange("uppercase");
  }
  const lowercase=()=>{
   let lower = text.toLowerCase();
   setText(lower);
   setChange("lowercase");
  }
  const submit=()=>{
    let latest =  new String(text);
    let old = new String(submitText?submitText:"");
    let submit = old +" "+ latest;
    setSubmit(submit);
    setText("");
  }
  const refresh = ()=>{
    setChange();
    setSubmit();
    setText('');
  }
  useEffect(()=>{
  if(change=="uppercase"){
    uppercase();
  }
  else if(change=="lowercase"){
    lowercase();
  }
  // setItems([text]);
  },[text,setText]);

  return (
    <>
     <h2>
        TextREAD App
     </h2>
     <div className='textbox'>
      <textarea name="text" id="txt" maxLength={500} rows={7} cols={100} value={text} autoCorrect='on' placeholder='Enter some text' onChange={(e)=>setText(e.target.value)}></textarea>
      <div className='buttons'>
      <button onClick={uppercase}> set to UpperCase</button>
       <button onClick={lowercase}> set to LowerCase</button>
      <button onClick={submit}>Submit To read</button>
      <button onClick={refresh}>Refresh </button> 
      {/* <button onClick={}> Save permanent</button> */}
      </div>
      <div>
        <h3>Maxium lenght text in text fild - {text?text.length:" 0 "}/500</h3>
        <h3>word in text fild - {text?text.split(" ").length:" 0 "}</h3>
        <p>avarage  time to read this para -  {text?text.split("").length *(1/1000*60):submitText?submitText.split("").length*(1.5/1000*60):"0 "}sec</p>
        <p className='para' style={submitText?{background:"antiquewhite"}:{background:"none"}}>
          {submitText}
        </p>
      </div>
     </div>
    </>
  )
}

export default App
