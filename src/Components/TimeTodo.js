import React, {useState , useContext} from "react";
import DateContext from "../Contexts/DateContext";

function TimeTodo(props){

    let [time , setTime] = useState('')

    let inputHandler = (e) => {setTime(e.target.value)}

    let formHandler =(e)=>{
        e.preventDefault()
        props.timeTodo(time)
        setTime('')
        props.btnHandler()

    }
    return(
           <form className="form" onSubmit={formHandler} >
               <input type="time" placeholder="I want to do ..." className="form-control mx-sm-3" value={time} onChange={inputHandler}/>
               <button type="submit" className="btn btn-primary">Set</button>
           </form>
    )
}

export default TimeTodo