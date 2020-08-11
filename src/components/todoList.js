import React from 'react'
import Styled from 'styled-components'
import moment from 'moment'

const StyledList = Styled.div`

li {
    &:hover{
        transform: scale(1.1);
        z-index: 2;
        transition: 0.5s ease-out;
        background: rgba(0,230,233,0.8);
        border: 1px solid rgba(0,230,233,1);
        box-shadow: 0px 0px 5px black;
    }
    border: 1px solid rgba(0,230,233,0.5);
    padding: 1rem 0;
    background: rgba(0,230,233,0.4);
}
li.complete {
    /* background: grey;
    background: linear-gradient(90deg, rgba(0,0,0,0.2) 0%, rgba(255,255,255,0.5) 50%, rgba(0,0,0,0.2) 100%); */
    background: rgba(0,230,233,0);
}
p{
    font-size: 1.25rem;
}
.momentTime {
    padding-top: 1rem;
    font-size: .8rem;
}

`

const TodoList = props => {
    const { todos, completedTodo } = props

    return(
        <StyledList>
            <ul>
                {todos.map(todo => {
                    return <li key={todo.id} onClick={() => completedTodo(todo.id)} className={todo.completed ? 'complete' : ''}><p>{todo.item}</p><p class='momentTime'>{todo.timestamp}</p></li>
                })}
            </ul>
        </StyledList>
    )
}

export default TodoList