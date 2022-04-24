//import logo from './logo.svg';
//import './App.css';
import Card from "./components/UI/Card";
import ExpenseItem from "./components/ExpenseItem";
function App() {
  const expenses=[
  {id:"e1",title:"Toilet Paper", amount:97.67, date:new Date(2020,7,14)},
  {id:"e2",title:"Television", amount:797.67, date:new Date(2021,2,12)},
  {title:"Car Insurance", amount:297.67, date:new Date(2021,2,28)},
  {title:"New wooden desk", amount:450, date:new Date(2021,5,12)}
]

  return (
   <Card className="Card">
          <h2>Expense Sheet</h2>
          
          <ExpenseItem 
                      title={expenses[0].title}
                      amount={expenses[0].amount}
                      date={expenses[0].date}>
          </ExpenseItem>
          <ExpenseItem 
                      title={expenses[1].title}
                      amount={expenses[1].amount}
                      date={expenses[1].date}>
          </ExpenseItem>
          <ExpenseItem 
                      title={expenses[2].title}
                      amount={expenses[2].amount}
                      date={expenses[2].date}>
          </ExpenseItem>
          <ExpenseItem 
                      title={expenses[3].title}
                      amount={expenses[3].amount}
                      date={expenses[3].date}>
          </ExpenseItem>
          </Card>
      
    
  );
}

export default App;


/*using javascript
const para=document.createElement("p");
para.textContent="this is also visible";
document.getElementById("root").append(para)*/
