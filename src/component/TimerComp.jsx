import React, { useState ,useEffect} from 'react'
import Posts from './Posts'
function TimerComp() { 
   const [dataUs,setDataUs] = useState([])
const randomId = Math.random()*100

useEffect(()=>{
  let validate = true

  if(validate ){
  var time=  setTimeout(()=>{
       fetch(`https://jsonplaceholder.typicode.com/posts/${randomId.toFixed()}`)
   .then(async(res)=> await res.json())
   .then((data)=> {if(validate)setDataUs(data)})
 
    },3000) 
   
      
  }
 return ()=>{clearTimeout(time) ;validate = false}
},[randomId])
  
  return(
    <Posts data={dataUs}/>
  )
}

export default TimerComp