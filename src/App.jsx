import './App.css';
import { useEffect, useState } from 'react';
import Saved_data from './component/Saved_data';
function App() {
  const [change, setChange] = useState();
  const [text, setText] = useState("");
  const [submitText,setSubmit] = useState();
  const [items, setItems] = useState();
  const [count, setCount] = useState(0);
  const [click, setclick] = useState(0);
  const [hide ,sethide] = useState('move the button down');
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
  const save =() =>{
    if(text!=""){
    localStorage.setItem(`item ${count}`,items);
    localStorage.setItem(`${count}`, count);
    let newCount = localStorage.getItem(`${count}`);
    setCount(parseInt(newCount)+1);
    setText(' ');
  }
  refresh();
    // alert("this paara is saved !")
  }
  useEffect(()=>{
  if(change=="uppercase"){
    uppercase();
  }
  else if(change=="lowercase"){
    lowercase();
  }
  setItems(text);
  },[text,setText]);

  function render (){
    if(click==0){
      setclick(1);
    }
    else{
      setclick(0);
    }
  }
  
  function removebtn(){
    console.log("mouse moving");
    sethide(' ');
  }
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
      <button onClick={save}> Save permanent</button>
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
    <div>
      <p>your text, whatever you save the texts they are shown here by clicking in this button </p>
    <button onClick={render}>
      your saved item
    </button>
    </div>
     <button className='button_move' onMouseMove={removebtn}>
     {click==0?"":hide}
     </button>
    <div>
      {click==0?"":<Saved_data/>}
    </div>
    </>
  )
}

export default App
