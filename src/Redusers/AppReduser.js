function AppReduser(state , action) {
    console.log(state , action)
    switch (action.type) {
        case 'init-todo' :
            let {todos} = action.payload;
            return {
                ...state,
                todos
            }
        case 'add-todo' :
          return AddTodo(state , action)
        case 'delete_todo':
            let {key} = action.payload
            return {
                ...state,
                todos : state.todos.filter(item => item.key !== key)
            }
        case  'login' :
            return {
                ...state,
                auth : true
            }
        case 'log_out' :
            return {
                ...state,
                auth: false
            }
        case 'status_true' :
            return {
                ...state,
                status : true
            }
        case 'status_false' :
            return {
                ...state,
                status : false
            }
        case 'edit_Todo' :
            return editTodo(state , action)
        case 'toggle_Todo':
            return toggleTodo(state , action)
        case 'get-todo':
            return GetTodo(state  , action)
        default:
            return state;
    }
}

export default AppReduser

let AddTodo = (state , action) =>{
    let {todos} = action.payload;
    return {
        ...state,
        todos : [
            ...state.todos,
            todos

        ]
    }
}

let toggleTodo = (state , action) => {
    let {key} = action.payload

    let item = state.todos.find(item => item.key === key)
    item.done =! item.done

    let newTodos = state.todos.filter(item => item.key !== key)
    return {
        ...state,
        todos : [
            ...newTodos,
            item
        ]
    }
}

let editTodo = (state , action) => {
    let {key , text} = action.payload
    let item = state.todos.find(item => item.key === key)
    item.text = text

    let newTodos = state.todos.filter(item => item.key !== key)
        return{
            ...state,
            todos : [
                ...newTodos,
                item
            ]
        }
}

let GetTodo=(state , action)=>{
    let {todos} = action.payload

    return{
        ...state,
        todos
    }
}

// timeTodo = (time) => {
//     console.log(time)
//     this.setState(prevState=>{
//         return{
//             date : [
//                 ...prevState.date ,
//                 {key : Date.now() , dateTodo : time}
//             ]
//
//         }
//     })
// }
//
//
// addTodo(text , key){
//     this.setState(prevState=>{
//         return{
//             todos : [
//                 ...prevState.todos ,
//                 {key , done : false , text }
//             ]
//         }
//     })
//
// }
//
// deleteTodo(key){
//     this.setState(prevState=>{
//         return{
//             todos : prevState.todos.filter(item => item.key !== key)
//         }
//     })
// }
//

//
// toggleTodo = (key)=>{
//     let item = this.state.todos.find(item => item.key === key)
//     item.done =! item.done
//     console.log(item)
//
//     let newTodos = this.state.todos.filter(item => item.key !== key)
//     this.setState({
//         todos : [
//             ...newTodos,
//             item
//         ]
//     })
//
//
// }
//
// login = ()=>{
//     this.setState({auth : true})
// }
//
// logout = () => {
//     this.setState({auth : false})
// }


