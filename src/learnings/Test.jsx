import './app.css'

const Test = () =>{

    const handleSubmit = ()=>{
        console.log("submitted")
    }

    const handleSave = () =>{
        console.log('Saved')
    }
    return(
        <>
        <div style={{border:"2px solid black", height:"50px", width:"50px"}} onClick={handleSave}>Save</div>
        <button onClick={handleSubmit}>Submit</button>
        </>
    )
}

export default Test;


