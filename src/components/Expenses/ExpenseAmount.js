import "./ExpenseAmount.css";

const ExpenseAmount=(props)=>{
return(
    <div className="AmountStyle">
           <h3 align="right" >${props.amount}</h3>
       </div>
)
}

export default ExpenseAmount;