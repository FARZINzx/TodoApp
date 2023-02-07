import React, {useEffect , useReducer} from "react";
import todoApi from "../Api/TodoApi";
 import TodoReduser from '../Redusers/TodoReduser'
//import Style
import './../Components/Component Style/todosStyle.css'
import Card from './../Components/Card'

function Home(){
        const [state , dispatch] = useReducer(TodoReduser , {
        todos : []
    })
    console.log(state.todos)
      useEffect(()=>{
        todoApi.get(`/todo.json`)
            .then(response=>jsonHandler(response.data))
            .catch(error=> console.log(error))

        let jsonHandler = (data) =>{
           let todosArr = Object.entries(data).map(([key , value])=>{return {key , ...value}})
            dispatch({type : 'init-todo' , payload : {todosArr}})

        }
      },[])

    // const [stateData , setData] = useState([])
    //
    // useEffect(()=>{
    //     todoApi.get(`/todo.json`)
    //         .then(response => jsonHandler(response.data))
    //         .catch(error => console.log(error))
    //
    //     let jsonHandler = (data) => {
    //         setData(Object.entries(data).map(([value])=>{return{...value}}) )
    //         let todoHistory = Object.entries(stateData)
    //         console.log(todoHistory)
    //
    //
    //     }
    // },[])
        return(
        <>
            {
              <div className='contain'>
                  {state.todos.map(item => <Card item={item} />)}
              </div>
            }

        </>
    )
}



export default Home
