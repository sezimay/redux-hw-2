import React,{useState} from 'react'
import TimerComp from '../TimerComp'
const App = () => {
  const [bool,setBool] = useState(true)
  return (
    <div>{bool ?<TimerComp/> :<div>Компонент уничтожен</div>}
    <button onClick={()=>{setBool(bool? false:true)}} >Toggle</button></div>
  )
}

export default App