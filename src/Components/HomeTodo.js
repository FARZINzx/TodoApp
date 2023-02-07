import React from "react";

function HomeTodo(props){
    let [text] = props
    console.log(props)
    return(
        {text}
    )
}

export default HomeTodo