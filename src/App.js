import React, { useState } from 'react';
import ItemsOfList from "./ItemsOfList";
import './App.css';

const App = () => {

  const [inputList, setInputList] = useState();

  const [itemArrayList, setArrayItem] = useState([]);
  
  const itemAddEvent = (event) => {
    setInputList(event.target.value);
  };

  const storeItems = () => {
    setArrayItem( (oldItems) => {
    return [...oldItems, inputList];
    });
    setInputList("");
  };

  const deleteItems = (id) => {
    setArrayItem( (oldItems) => {
      return oldItems.filter((arrayElement, index) =>{
        return index !== id ;
      });
    })
  };

  return (
    <>
      <div className= "outter-div">
        <div className= "inner-div">
          <br/>
          <h1> ToDo List </h1>
          <br/>
          <input type= "text" placeholder= "Add an Item" value= {inputList} onChange= {itemAddEvent}/>
          <button className= "add-button" onClick= {storeItems}> + </button>

          <ul>
            {itemArrayList.map( (itemValue, index) => { 
              return <ItemsOfList 
                key= {index}
                id= {index}  
                value= {itemValue}
                onSelect= {deleteItems} />; } )
            }
          </ul>

        </div>
      </div>
    </>
  );
};

export default App;