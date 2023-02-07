import React , {useContext , useState} from "react";
//Import Components
//Import Context
import AuthContext from "../Contexts/AuthContext";
import TodoContext from "../Contexts/TodoContext";
import todoApi from "../Api/TodoApi";
//Import Style
import './Component Style/InputData.css'

function InputData(){

    let [inputText , setInputText] = useState("")
    const todoContext = useContext(TodoContext)
    let todo


    let inputHandler = (e) => {
        setInputText(e.target.value)
    }

    let formSubmit = (e)=>{
        e.preventDefault()
        if (inputText.length > 1 ){
             todo = {text: inputText , done : false}
            todoApi.post(`/todo.json` , todo)
                .then(response => responseJson(response))
                .catch(erorr => console.log(erorr))
            // setTimeInput(true)
        }

        let responseJson = (response) =>{
            todoContext.dispatch({type : 'add-todo' , payload : {todos : {...todo , key : response.data.name}}})
            // keyTodoSet(response.data.name)


        }
        setInputText("")
    }


    const log = useContext(AuthContext)

    return(
       <>
               <div className="InputData">
                   <div className="container d-flex flex-column align-items-center ">
                       <h1 className="text-black">Welcome </h1>
                       {
                            // timeInput
                            //   ? <TimeTodo timeTodo ={todoContext.timeTodo} btnHandler = {btnHandler}/>
                            //   :
                                log.authiticate
                                ? <div>
                                    <p className="lead text-muted">To get started , add some items to your list : </p>
                                    <form className="form" onSubmit={formSubmit}>
                                        <input type="text" placeholder="I want to do ..." className="form-control mx-sm-3" value={inputText} onChange={inputHandler}/>
                                        <button type="submit" className="btn btn-primary">Add</button>
                                    </form>
                                </div>
                                :<strong>You must be Login <strong>First !</strong></strong>

                       }
                   </div>
               </div>

       </>
    )
}

export default InputData

