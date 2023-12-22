import React from "react"
export default function ListKey()
{

    const animals=["dog","cat","tiger","lion"]
    const result=animals.map((ani,index)=><li key={index}>{index}{ani}</li>)
    return(
        <div>
      <ul type="none">
       {result}

      </ul>
        </div>
    )
}