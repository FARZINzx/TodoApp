import React, {useContext, useEffect, useState} from "react";
import TodoContext from "../Contexts/TodoContext";
import todoApi from "../Api/TodoApi";
import TodoListContext from "../Contexts/TodoListContext";
import AuthContext from '../Contexts/AuthContext'
import Loading from "../Components/Loading";
import TodoList from "../Components/TodoList";
import InputData from "../Components/InputData";

function Todos(){
    const todosContext = useContext(TodoContext);
    const authContext = useContext(AuthContext)
    const [loading , setLoading] = useState();


    useEffect(() => {
        setLoading(true);
        todoApi.get(`/todo.json`)
            .then(response => jsonHandler(response.data))
            .catch(error => console.log(error));
    },[])

    let jsonHandler = (data) => {
        setLoading(false)
        let todos = Object.entries(data).map(([key , value]) => { return { ...value, key }});
        todosContext.dispatch({type : 'init-todo' , payload : {todos}})
    }


    return(
        <TodoListContext.Provider value={{
            todos : todosContext.todos
        }}>
            <>
            <InputData/>
                {
                    loading
                     ? <Loading/>
                     : (
                         <TodoList/>
                        )
                }


            </>
        </TodoListContext.Provider>
    )
}

export default Todos










