import React , {useState , useContext} from "react";

//Import Style
import "./.././Components/Component Style/TodoSyle.css"
//Import Context
 import BtnContext from "../Contexts/ButtonHandler";
import TodoContext from "../Contexts/TodoContext";
import EditTodo from "./EditTodo";
//ajax
import todoApi from "../Api/TodoApi";
import {Link, Route} from "react-router-dom";
import ButtonHandler from "./ButtonHandler";
import TodoDetail from './TodoDetail'

function Todo(props){

    let [edit , setEdit] = useState(false)

    let [loading , setLoading] = useState(false)

    const todoContext = useContext(TodoContext)
    // let {time} = props

    let {text} = props.item
    let {key} = props.item

    let editHandler = (text) => {
        setLoading(true)
        todoApi.put(`/todo/${key}.json` , {done : props.item.done , text : text})
            .then(response => editJson(text))
            .catch(erorr => console.log(erorr))
        setEdit(false)
    }

    let editJson = (text) => {
        setLoading(false)
        todoContext.dispatch({type : 'edit_Todo' , payload : {key : key , text}})
    }

    let editState = (editState) => {
        setEdit(editState)
    }

    let deleteHandler = () => {
        setLoading(true)
        todoApi.delete(`/todo/${key}.json`)
            .then(response =>deleteJson(response.data))
            .catch(erorr => console.log(erorr))


    }

    let deleteJson = (data) => {
        setLoading(false)
        todoContext.dispatch({type : 'delete_todo' , payload : {key : key}})

    }

    let doneHandler = () =>{
        setLoading(true)
        todoApi.put(`/todo/${key}.json` , {done : !props.item.done , text})
            .then(response => doneJson(response))
            .catch(erorr => console.log(erorr))
    }

    let doneJson = () => {
        setLoading(false)
        todoContext.dispatch({type : 'toggle_Todo' , payload : {key : key}})
    }

    return(
      <BtnContext.Provider value={{
       key : key ,
       text : text ,
       doneHandler ,
       deleteHandler  ,
       done : props.item.done,
          editState,
          parameter : key,
          item : props.item
      }}>
          <>
              {
                  !edit
                      ?(
                          <div className="col-6 mb-2 todos">
                              <div className="d-flex justify-content-between align-items-center border rounded p-3">
                               <Link  to={`/todos/${props.item.key}`} style={{
                                   color : 'black' ,
                                   textDecoration : 'none' ,
                               }}>{text}</Link>
                                      {
                                          !loading
                                            ? <ButtonHandler/>
                                            : <h6>Loading ...</h6>
                                      }

                                  </div>
                              </div>
                      )
                      :<EditTodo text = {text} edit = {editHandler}/>
              }
          </>
      </BtnContext.Provider>

    )
}

export default Todo