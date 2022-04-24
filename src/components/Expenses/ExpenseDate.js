import "./ExpenseDate.css"
const ExpenseDate=(props)=>{
    const month=props.date.toLocaleString("en-US",{month:"long"});
    const day=props.date.toLocaleString("en-US",{day:'2-digit'});
    const year=props.date.getFullYear();

    return(
        <div >
          <div className="DateStyle">{month}</div>
          <div className="DateStyle">{year}</div>
          <div className="DateStyle">{day}</div>
        </div>
    )
}

export default ExpenseDate;