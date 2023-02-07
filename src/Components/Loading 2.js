import React from "react";
import {Spinner} from "react-bootstrap";
import './../Components/Component Style/Loading.css'

function Loading(){
    return(
        <div className="loading col-6 mb-2">
            <div className="d-flex justify-content-between align-items-center ">
                <Spinner className='spinner' animation='grow' size='sm'/>
            </div>
        </div>
    )
}

export default Loading