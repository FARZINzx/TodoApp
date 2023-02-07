import React from "react";

class EditTodo extends React.Component{
    state = {
        editText : this.props.text
    }

    inputHandler = (e) => {this.setState({editText : e.target.value})}
    render() {
        return(
            <div className="editTodo d-flex">
                    <input className="form-control" value={this.state.editText} onChange={this.inputHandler}/>
                    <button className="btn btn-sm btn-primary" value={this.state.editText} onClick={() =>this.props.edit(this.state.editText)}>Edit</button>
            </div>
        )
    }
}

export default EditTodo