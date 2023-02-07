import React , {useEffect , useState , useContext} from "react";
import {useParams} from 'react-router-dom'
import todoApi from './../Api/TodoApi'
import BtnContext from "../Contexts/ButtonHandler";
import Loading from "./Loading";


function TodoDetail(props){
    const params = useParams()
    const [state , setState] = useState({});
    const [loading , setLoading] = useState()
    console.log(state)

    useEffect(()=>{
        setLoading(true)
        todoApi.get(`/todo/${params.id}.json`)
            .then(response =>{
                setLoading(false)
              if (response.data){
                  setState({...response.data})
              } else {
                  props.history.push('/404')
              }
            } )
            .catch(erorr => console.log(erorr))
    },[])

    return(
        <div className={'container'}>
            <div className={'row'}>
                <div className={'col-12'}>
                    {
                        loading
                          ? <Loading/>
                          : (
                               <>
                                   <h2>Todo Detial</h2>
                                   <p>{state.text}</p>
                                   <span className={`badge ${state.done ? 'bg-success' : 'bg-warning'}`} >{state.done ? 'Done' : 'Undone'}</span>
                               </>
                            )
                    }
                </div>
            </div>
        </div>
    )
}

export default TodoDetail