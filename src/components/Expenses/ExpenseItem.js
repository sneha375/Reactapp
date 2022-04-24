import React,{useState} from "react";
import Card from "../UI/Card";
import ExpenseAmount from "./ExpenseAmount";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseTitle.css"
const ExpenseItem=(props)=>{

    const [title,setTitle]=useState(props.title);   //hooks useState always return array
   
   const clickHandler=()=>{
       
       setTitle("updated");
       console.log(title);
   }
    return(
<Card className="expense-item">
    
        <ExpenseAmount amount={props.amount}/>
        <ExpenseDate date={props.date}/>
        <div className="titleStyle">
           <h3 align="center" >{title}</h3>
       </div>
        <button onClick={clickHandler}> changetitle</button>
 </Card>
       
    )
}

export default ExpenseItem;