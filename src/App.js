import React,{useState} from 'react';
import './App.css';
import Todolists from './Todolists';


const App =()=>{

  const[input,setInput]=useState("")
  const[array,setArray]=useState([])

 const  Addtext =(event)=>{

  setInput(event.target.value)
 }
 const listofitems = () =>{

    setArray((olditems)=>{

      return [...olditems,input]
    })
    setInput("")
 }

 const deleteditems = (id) =>{
    setArray((olditems)=>{

      return olditems.filter((arrElem,i)=>{
          return i !==id;

      });
    }); 
  };

return(<div className="main-screen">
            <div className="center-screen">
            <br/>

            <h1 className="heading">To-Do List</h1>
            <br/>
            <input className="inputstyle" type="text" value={input} placeholder="Add items" onChange={Addtext}/>
            <button className="btn-class"  onClick={listofitems}> + </button>
            <ol className="order-list">

            {array.map((val,i)=>{
                return  <Todolists 

                key= {i}
                 id={i}
                 text={val}
                 onSelect={deleteditems}/>

            })}
           
            </ol>
            </div>

      
      </div>)


}

export default App;