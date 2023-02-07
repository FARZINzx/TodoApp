import React , {useContext} from "react";
import BtnContext from "../Contexts/ButtonHandler";



function ButtonHandler(){

    let btnContext = useContext(BtnContext)

    return(
        <div>
            <button type="button" className={`btn btn-sm ${ !btnContext.done ? 'btn-success' : 'btn-warning' }`} onClick={()=> btnContext.doneHandler()}>{btnContext.done ? 'Undone' : 'Done' }</button>
            <button type="button" className="btn btn-sm btn-primary" onClick={()=>btnContext.editState(true)}>Edit</button>
            <button type="button" className="btn btn-sm btn-danger" onClick={()=>btnContext.deleteHandler()}>Delete</button>
        </div>
    )
}

export default ButtonHandler