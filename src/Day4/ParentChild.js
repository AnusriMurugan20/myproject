export default function Parent()
{
    return(
        <div>
            <h1>parent component</h1>
            <Child res={1000}/>
        </div>
    )
}
function Child(props)
{
    return(
        <div>
            <h1>Child component</h1>
            <h1>The value id is {props.res}</h1>
        </div>
    )
}