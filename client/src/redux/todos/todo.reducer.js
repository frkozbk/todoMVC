export default (state=[],action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return [...state,{...action.payload}]
        case 'DELETE_TODO':
            return [...state].filter((item) => item._id!==action.payload)
        case 'FETCH_TODOS':
            return [...state,...action.payload]
        case 'CHANGE_TODO_CONTENT':
            return [...state].map((todo)=>{
                if(todo.id===action.payload._id){
                    return {...action.payload}
                }
                return todo
            })
        case 'TOGGLE_TODO':
            return [...state].map((todo) => {
                if(todo._id===action.payload){
                    return { ...todo, completed:!todo.completed}
                }
                return {...todo}
            })
        default:
            return state;
    }
}