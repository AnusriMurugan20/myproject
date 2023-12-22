function Demo()
{
    return(
        <div>
            <h1>Hello Paris</h1>
        </div>
    )
}
function OneExport()
{
    return(
        <div>
            <Demo/>
            <h3>Gender Check</h3>
            <label for="gender">Gender:  </label>
    <input type="radio"></input><label>Male</label>
    <input type="radio"></input><label>Female</label>
    <input type="radio"></input><label>Others</label>
        </div>
    )
}
export default OneExport;