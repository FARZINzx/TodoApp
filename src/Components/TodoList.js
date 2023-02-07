import React , {useState , useContext} from "react";
//Import Component
import Todo from "./Todo";
//Import Context
import TodoContext from "../Contexts/TodoContext";
import BtnContext from "../Contexts/ButtonHandler";

function TodoList(){
   let [ statusDone , setStatusDone] = useState(false)

    let todoContext = useContext(TodoContext)
    let {todos} = todoContext

    let filterList = todos.filter(item => item.done === statusDone)


    return(

        <BtnContext.Provider value={{
            deleteTodo : todoContext.deleteTodo,
            toggleTodo : todoContext.toggleTodo
        }}>
           <>
               <div className="todosList mt-2">
                   <div className="container">
                       <div className="d-flex flex-column align-items-center">
                           <nav className="col-6 mb-3 mt-1">
                               <div className="nav nav-tabs" role="tablist" id="nav-tab">
                                   {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                                   <a className={`"nav-item nav-link font-weight-bold" ${!statusDone ? 'active' : ''}`} onClick={()=>setStatusDone(false)} id="nav-home-tab">Undone<span className="badge text-black badge-secondary">{todos.filter(item=> item.done === false).length}</span></a>
                                   {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                                   <a className={`"nav-item nav-link font-weight-bold" ${statusDone ? 'active' : ''}`} onClick={()=>setStatusDone(true)} id="nav-home-tab">Done<span className="badge text-black badge-secondary">{todos.filter(item=> item.done === true).length}</span></a>
                               </div>
                           </nav>
                           {
                               filterList.length === 0
                                   ? <p className="font-monospace">There isn`t any todos to do</p>
                                   :filterList.filter(item=>item.done === statusDone).map(item => <Todo item ={item}/>)
                           }
                       </div>
                   </div>
               </div>
           </>
        </BtnContext.Provider>


    )
}

export default TodoList

