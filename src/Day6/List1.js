import React from 'react'
export default function List()
{
    const college=[{id:1,stuName:"sachin",age:26},
    {id:1,stuName:"suji",age:26},
{id:1,stuName:"anu",age:26},]

const display=college.map((col)=><li key={col.id}>{col.stuName}  {col.age}</li>)
return(
    <div style={{backgroundColor:"blue"}}>
        {display}
    </div>
)
}