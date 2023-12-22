import React,{useState} from "react";
import axios from "axios";
export default function DeleteAxios()
{
    const[Id,setId]=useState('');
    const handleId=(event)=>{setId(event.target.value)}

    const handleSubmit=(event)=>{
        event.preventDefault();
        axios.delete('http://localhost:3001/user/$',{Id})

        .then(res=>{
            console.log(res.data)
        })
        .catch(error=>{console.log("Error occured "+error)})
    }
    return(
        <div>                                                                      
            <h1>Axios Delete</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" value={Id} onChange={handleId}></input>
                <button type="submit">Delete</button>

            </form>
        </div>
    )
}
