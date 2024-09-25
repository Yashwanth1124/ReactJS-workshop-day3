/*import './App.css';
import SimpleTodos from './components/SimpleTodos';
const initialTodosList = [
  {
    id: 1,
    title: 'Book the ticket for today evening',
  },
  {
    id: 2,
    title: 'Rent the movie for tomorrow movie night',
  },
  {
    id: 3,
    title: 'Confirm the slot for the yoga session tomorrow morning',
  },
  {
    id: 4,
    title: 'Drop the parcel at Bloomingdale',
  },
  {
    id: 5,
    title: 'Order fruits on Big Basket',
  },
  {
    id: 6,
    title: 'Fix the production issue',
  },
  {
    id: 7,
    title: 'Confirm my slot for Saturday Night',
  },
  {
    id: 8,
    title: 'Get essentials for Sunday car wash',
  },
]
function App() {
  return <SimpleTodos initialTodosList = {initialTodosList}/>
}
*/
/*
import CashWithdrawal from './components/CashWithdrawal'

import './App.css'

const denominationsList = [
  {
    id: 1,
    value: 50,
  },
  {
    id: 2,
    value: 100,
  },
  {
    id: 3,
    value: 200,
  },
  {
    id: 4,
    value: 500,
  },
]

const App = () => <CashWithdrawal denominationsList={denominationsList} />

export default App;

*/
/*
import React,{useState} from 'react'
function App(){
  let [count,setCount]=useState(0);
  const onClickClick=()=>setCount(count+1);
  if(count<=5){
    return(
      <div>
        <h1>{count}</h1>
        <button onClick={onClickClick}>Click</button>
      </div>
    )
  }else{
    count = setCount(0);
  }
}
export default App
*/
/*
import React,{Component} from 'react'
class App extends Component{
  state={count:0}
  onchangetext=(e)=>{
    this.setState({count:e.target.value.length})
  }
  render(){
    const {count} = this.state
    return(
      <div>
        <input type="search" onChange={this.onchangetext}/>
        <p>No.of letters:{count}</p>
      </div>
    )
  }
}
export default App;
*/













