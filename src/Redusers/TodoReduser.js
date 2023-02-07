function TodoReduser(state , action) {
    console.log(state , action)
    switch (action.type) {
        case 'init-todo' :
            let {todosArr} = action.payload
            console.log(todosArr)
            return {
                ...state,
               todos : todosArr
            }
        default :
            return state
    }
}

export default TodoReduser