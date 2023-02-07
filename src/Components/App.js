import React, {useReducer} from "react";
//Import Bootstrap
import 'bootstrap/dist/css/bootstrap.css'
import './Component Style/App.css'
//Import Context
import AuthContext from "../Contexts/AuthContext";
import TodoContext from "../Contexts/TodoContext";
//Import Components
import Header from "./Header";
import InputData from "./InputData";
import Home from './../Route/Home'
import TodoDetail from "./TodoDetail";
//import Reducer
import AppReducer from "../Redusers/AppReduser";
//import Router
import { BrowserRouter, Route , Switch } from 'react-router-dom'
import Content from "../Route/Contect";
import NotFound from "../Route/NotFound";
import todos from '../Route/todos'



function App(){

    const [state , dispatch ] = useReducer( AppReducer ,{
        todos : [],
        auth : false,
        status : false,
        // date : []
    })

console.log(state.todos.text)

    return(

        <BrowserRouter>
            <TodoContext.Provider value={{
                state : state ,
                todos : state.todos,
                dispatch : dispatch
            }}>
                <AuthContext.Provider value={{
                    authiticate : state.auth,
                    dispatch
                }}>

                    <div className="App">
                        <Header/>
                        <div>
                            <Switch>
                                <Route path='/todos' component={todos}/>
                                <Route path='/history' component={Home}/>
                                <Route path='/Content' component={Content}/>
                                <Route path='/todos/:id' component={TodoDetail}/>
                                <Route path='' component={NotFound}/>

                            </Switch>
                        </div>
                    </div>
                </AuthContext.Provider>
            </TodoContext.Provider>
        </BrowserRouter>

    )

}

export default App

// class App extends React.Component{
//
//
//     constructor() {
//         super();
//         console.log(window.jsonData)
//         axios.get(`https://todoapp-d6638-default-rtdb.firebaseio.com/todos.json`)
//             .then(response => this.jsonHandler(response.data))
//             .catch(erorr => console.log(erorr))
//
//
//     }
//
//     jsonHandler = (data) => {
//         window.jsonData = Object.entries(data).map(([key , value]) => {
//             return{
//                 ...value,
//                 key
//             }
//         })
//
//     }
//
//     state = {
//         todos : [],
//         auth : false,
//         status : false,
//         date : []
//     }
//
//
//
//     timeTodo = (time) => {
//         console.log(time)
//         this.setState(prevState=>{
//             return{
//                 date : [
//                     ...prevState.date ,
//                     {key : Date.now() , dateTodo : time}
//                 ]
//
//             }
//         })
//     }
//
//
//     addTodo(text , key){
//         this.setState(prevState=>{
//             return{
//                 todos : [
//                     ...prevState.todos ,
//                     {key , done : false , text }
//                 ]
//             }
//         })
//
//     }
//
//     deleteTodo(key){
//         this.setState(prevState=>{
//             return{
//                 todos : prevState.todos.filter(item => item.key !== key)
//             }
//         })
//     }
//
//     editTodo = (key , text) => {
//         let item = this.state.todos.find(item => item.key === key)
//         item.text = text
//
//         let newTodos = this.state.todos.filter(item => item.key !== key)
//         this.setState(prevState => {
//             return{
//                 todos : [
//                     ...newTodos,
//                     item
//                 ]
//             }
//         })
//     }
//
//     toggleTodo = (key)=>{
//         let item = this.state.todos.find(item => item.key === key)
//         item.done =! item.done
//         console.log(item)
//
//         let newTodos = this.state.todos.filter(item => item.key !== key)
//         this.setState({
//             todos : [
//                 ...newTodos,
//                 item
//             ]
//         })
//
//
//     }
//
//     login = ()=>{
//         this.setState({auth : true})
//     }
//
//     logout = () => {
//         this.setState({auth : false})
//     }
//
//
//     render(){
//         let {todos , status} = this.state
//         let filterList =todos.filter(item => item.done === status)
//         // let itemDate = this.state.date.map(item => item.timeTodo)
//         this.setState(prevState=>{
//             return{
//                 ...prevState,
//                 window.jsonDataدح
//             }
//         })
//         return(
//            <TodoContext.Provider value={{
//                todos : this.state.todos,
//                time : this.state.date,
//                add : this.addTodo.bind(this),
//                deleteTodo : this.deleteTodo.bind(this),
//                toggleTodo : this.toggleTodo,
//                editTodo : this.editTodo,
//                timeTodo : this.timeTodo,
//
//            }}>
//                <AuthContext.Provider value={{
//                    authiticate : this.state.auth,
//                    login : this.login,
//                    logout : this.logout,
//                }}>
//                    <div className="App">
//                        <Header/>
//                        <InputData/>
//                        <div className="todosList mt-1">
//                            <div className="container">
//                                <div className="d-flex flex-column align-items-center">
//                                    <nav className="col-6 mb-3">
//                                        <div className="nav nav-tabs" role="tablist" id="nav-tab">
//                                            <a className={`"nav-item nav-link font-weight-bold" ${!this.state.status ? 'active' : ''}`} onClick={()=>this.setState({status : false})} id="nav-home-tab">Undone<span className="badge text-black badge-secondary">{this.state.todos.filter(item=>item.done ===false).length}</span></a>
//                                            <a className={`"nav-item nav-link font-weight-bold" ${this.state.status ? 'active' : ''}`} onClick={()=>this.setState({status : true})} id="nav-home-tab">Done<span className="badge text-black badge-secondary">{this.state.todos.filter(item=>item.done ===true).length}</span></a>
//                                            {/*<a className='nav-item nav-link nav-tabs font-weight-bold' id='time-nav'>Time</a>*/}
//                                        </div>
//                                    </nav>
//                                    {
//                                        this.state.todos.text == 0
//                                          ? <Alert>Please add Todo</Alert>
//                                          : filterList == 0
//                                            ? <p className="font-monospace">There isn`t any todos to do.</p>
//                                            : filterList.map(item => <Todo time ={this.state.date.map(item=>item.dateTodo)} text = {item.text} item = {item} />)
//
//                                    }
//                                </div>
//                            </div>
//                        </div>
//                    </div>
//                </AuthContext.Provider>
//            </TodoContext.Provider>
//         )
//     }
//
// }

// function App(){
//
//     let [todos , setTodos] = useState('')
//
//     let [date , setDate] = useState('')
//
//     let [auth , setAuth] = useState(false)
//
//     let [status , setStatus] = useState(false)
//
//      let timeTodo = (time) => {
//         console.log(time)
//          setDate(prevState =>
//               ...prevState,
//              {key : Date.now() , dateTodo : time})
//        }
//
//
//     let addTodo = (text)=>{
//       setTodos(prevState =>
//                prevState,
//               {key : Date.now() , done : false , text }
//     })
//     }
//
//   let deleteTodo=(key)=>{
//       setTodos(prevState =>{
//           prevState.filter(item => item.key !== key)
//     })
//     }
//
//    let editTodo = (key , text) => {
//         let item = this.state.todos.find(item => item.key === key)
//         item.text = text
//
//         let newTodos = this.state.todos.filter(item => item.key !== key)
//         setTodos({...newTodos,
//             item})
//     }
//
//    let toggleTodo = (key)=>{
//         let item = todos.find(item => item.key === key)
//         item.done =! item.done
//         console.log(item)
//
//         let newTodos = todos.filter(item => item.key !== key)
//         setTodos({...newTodos,
//             item})
//
//     }
//
//    let login = ()=>{
//         setAuth(true)
//
//    let logout = () => {
//        setAuth(false)
//     }
//
//     return(
//         <TodoContext.Provider value={{
//             todos :todos,
//             time : date,
//             add : addTodo,
//             deleteTodo : deleteTodo,
//             toggleTodo : toggleTodo,
//             editTodo : editTodo,
//             timeTodo : timeTodo
//
//         }}>
//             <AuthContext.Provider value={{
//                 authiticate : this.state.auth,
//                 login : this.login,
//                 logout : this.logout,
//             }}>
//                 <div className="App">
//                     <Header/>
//                     <InputData/>
//                     <div className="todosList mt-1">
//                         <div className="container">
//                             <div className="d-flex flex-column align-items-center">
//                                 <nav className="col-6 mb-3">
//                                     <div className="nav nav-tabs" role="tablist" id="nav-tab">
//                                         <a className={`"nav-item nav-link font-weight-bold" ${!status ? 'active' : ''}`} onClick={()=>sETs} id="nav-home-tab">Undone<span className="badge text-black badge-secondary">{this.state.todos.filter(item=>item.done ===false).length}</span></a>
//                                         <a className={`"nav-item nav-link font-weight-bold" ${status ? 'active' : ''}`} onClick={()=>this.setState({status : true})} id="nav-home-tab">Done<span className="badge text-black badge-secondary">{this.state.todos.filter(item=>item.done ===true).length}</span></a>
//                                         <a className='nav-item nav-link nav-tabs font-weight-bold' id='time-nav'>Time</a>
//                                     </div>
//                                 </nav>
//                                 {
//                                     this.state.todos.text == 0
//                                         ? <Alert>Please add Todo</Alert>
//                                         : filterList == 0
//                                         ? <p className="font-monospace">There isn`t any todos to do.</p>
//                                         : filterList.map(item => <Todo time ={this.state.date.map(item=>item.dateTodo)} text = {item.text} item = {item} />)
//
//                                 }
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </AuthContext.Provider>
//         </TodoContext.Provider>
//
//     )
// }


