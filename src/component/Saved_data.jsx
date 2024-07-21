import { useEffect, useState } from "react";
import '../App.css';
function Saved_data(){
    const [savedItm , setSavedItm] = useState([]);
    // const [value,setValue] = useState([]);
    useEffect(()=>{
        let count = 0;
        setInterval(()=>{
        if(count!=5){
        // localStorage.setItem("getsavedId",count);
        // let getcount = localStorage.getItem("getsavedId");
        // count = parseInt(getcount) +1;
    }
},100);
setSavedItm([localStorage.getItem(`item ${0}`)]);
},[]);
    const a = savedItm.map((value,index)=>{
        let store =<p>
             {"text "+ index +" => "+ value}
               </p>
        return store;
    });
    return(
    <>
      <h1>SAVED TEXT</h1>
      <div className="saved_data"> 
        {a}
      </div>
    </>
  )
}
export default Saved_data;