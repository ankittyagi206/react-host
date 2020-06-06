import React,{useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Todolists from './Todolists';



function App() {  

  const [text,setText]= useState("")
  const [items,setItems] =useState([])

  const inputEvent =(event) =>{

         setText(event.target.value)
  }

  const listofItems = () =>{

    setItems((oldText) =>{
      return [...oldText,text];

    });
setText("")

  };
  return (
    <div className="main-screen">
        <div className="center-screen">
        <br/>
        <h1 className="heading" >ToDo List</h1>
        <br/>
        <input type="text" className="textinput" placeholder="Add items" value={text} onChange={inputEvent}/>
        <button className="btn-cls" onClick={listofItems}> + </button>

        <ol className="list-style">
         

          {
            items.map((value)=>{

              return < Todolists text={value}/>   ;
            })
          }

        </ol>
        </div>
    </div>
    );

}

export default App;

