export const initialState = {
    todo: [
        {
            item: 'Learn about reducers',
            completed: false,
            id: 3892987589
        },
    ]

}

export const todoReducer = (state, action) => {
    // console.log(state, action);
    switch(action.type){
        case 'SUBMIT_TODO' : 
            return {
                ...state, 
                todo: [...state.todo, action.payload]
        }
        case 'TODO_TOGGLE' :
                return {
                    ...state,
                todo: state.todo.map(todo => {
                    if(action.payload === todo.id){
                        return {
                            ...todo, completed: !todo.completed
                        }
                    }
                    return {...todo}
            })}
        case 'CLEAR_COMPLETE' :
            return {
                ...state,
                todo: state.todo.filter(todo => {
                    return !todo.completed
                })
            }
        default: 
            return state
    }
}