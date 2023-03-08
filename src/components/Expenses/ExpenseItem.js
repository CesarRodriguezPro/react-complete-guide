import "./ExpenseItem.css";
import React, {useState} from "react";
import ExpenseDate from "./ExpenseDate";

function ExpenseItem(props){
    const [title, setTitle] = useState(props.title)
    
    function changeTitle(){
        setTitle('updated')
    }
    


    return (
        <div className='expense-item'>
            <ExpenseDate date={props.date}/>
            <div className="expense-item__description">
                <h2>{title}</h2>
                <div className="expense-item__price">${props.amount}</div>
            </div>
            <button onClick={changeTitle}>change title</button>
        </div>
    )
}

export default ExpenseItem;