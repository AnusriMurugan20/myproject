 
 import React,{useState} from 'react'
 export default function DynamicRendering()
{
  const[x,setX]=useState(9);

  return(
    x>10 ?<p>THE VALUE IS GREATER THAN 10</p>:
    <p>the value smaller than 10</p>


  )



}