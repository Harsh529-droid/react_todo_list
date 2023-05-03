import React,{ useState, useEffect } from 'react'
import './style.css'

const Todo = () => {
 
  const getLocalData = () => {
    const list = localStorage.getItem('myTodoData');

    if(list){
       return JSON.parse(list); //converts json to array
    }else{
        return [];
    }
  }

  const [inputData, setInputData] = useState('');
  const [items, setItems] = useState(getLocalData());
  
  const addItem = (x) =>{
     const obj = {
        id : new Date().getTime().toString(),
        name : x
     };
     setItems([...items, obj]);
     setInputData("");
  }

  const deleteItem = (x) => {
    const newList = items.filter( (curr) =>{
         return (curr.id !== x);
    });
    setItems(newList);
  }

  const deleteAll = () => {
    setItems([]);
  }

//   adding local storage 
 useEffect(() => {
    localStorage.setItem("myTodoData", JSON.stringify(items)); 
 },[items]);               //stringify : converts array to stringified JSON

  return (
    <div className='main-div'>
        <div className='child-div'>
            <figure>
                <img src="images/todo.png" alt="logo" />
                <figcaption>Add your item here!</figcaption>
            </figure>
               
            <div className='addItems'>
                <input type="text" placeholder='Add Item' className='form-control' 
                 value = {inputData}
                 onChange={(event) => setInputData(event.target.value)}   
                /> 
                <i class="fa fa-plus add-btn"
                 onClick={() => addItem(inputData)}
                >
                </i>
            </div>
             
             {/* add items    */}
            <div className = "showItems">
               
                    {items.map((curr, index) => {
                            return(
                                <>
                                   <div className='eachItem' key='index'>
                                      <h3>{curr.name}</h3>
                                      <div className='todo-btn'>
                                            <i class="far fa-edit add-btn"></i>
                                            <i class="far fa-trash-alt add-btn"
                                             onClick={ () => deleteItem(curr.id)}
                                            ></i>
                                      </div>  
                                   </div>
                                </>
                            );
                    })}
                    
                
            </div>  

             {/* remove all items  */}
            <div className='showItems'>
                <button className='btn effect04' data-sm-link-text = "Remove All"
                 onClick={ () => deleteAll()}
                >
                    <span>Check List</span>
                </button>
            </div>
        </div>
    </div>
  )
}

export default Todo