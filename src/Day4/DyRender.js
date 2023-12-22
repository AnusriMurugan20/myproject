import React,{ useState} from 'react'
const isLoggedIn = true;
export default function DyRender()
{
    if(isLoggedIn)
    {
        return <p>Welcome Back!!</p>;

    }
    else{
        return <p>Please Log in</p>;
    }
}