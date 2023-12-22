import React,{useState} from 'react';

export default function StateHoldObject()
{
    const[office,setOffice]=useState({oid:1,oname:"zoho",year:2023})

    const changeDemo=()=>
    {
        setOffice((prevState)=>{return{...prevState,year:2024}})
    }
    const changeDemos=()=>
    {
        setOffice((prevState)=>{return{...prevState,oid:2}})
    }
    const changeDemooo=()=>
    {
        setOffice((prevState)=>{return{...prevState,oname:"PSS"}})
    }
    return(
        <div>
            <h1>Office id is {office.oid}</h1>
            <h1>Office name is {office.oname}</h1>
            <h1>Year {office.year}</h1>
            <button onClick={changeDemo}>changeYear</button>
            <button onClick={changeDemos}>chanegID</button>
            <button onClick={changeDemooo}>chanegName</button>
            


        </div>
    )
}