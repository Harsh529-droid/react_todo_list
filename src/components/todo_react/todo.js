import React,{ useState } from 'react'
import './style.css'

const Todo = () => {

  const [inputData, setInputData] = useState('');
  const [items, setItems] = useState([]);
  
  const addItem = (x) =>{
     setItems([...items, x]);
     setInputData("");
  }

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
                {/* <div className='eachItem'> */}
                    {items.map((curr, index) => {
                            return(
                                <>
                                   <div className='eachItem' key='index'>
                                      <h3>{curr}</h3>
                                      <div className='todo-btn'>
                                            <i class="far fa-edit add-btn"></i>
                                            <i class="far fa-trash-alt add-btn"></i>
                                      </div>  
                                   </div>
                                </>
                            );
                    })}
                    
                {/* </div> */}
            </div>  

             {/* remove all items  */}
            <div className='showItems'>
                <button className='btn effect04' data-sm-link-text = "Remove All">
                    <span>Check List</span>
                </button>
            </div>
        </div>
    </div>
  )
}

export default Todo