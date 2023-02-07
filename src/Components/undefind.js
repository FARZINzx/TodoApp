import React from "react";

class undefind extends React.Component{
    render() {
        console.log(this.props.match.params)
        return(
           <>
           <h2>404</h2>
           <p>It isn`t exist this page</p>
           </>

        )
    }
}

export default undefind