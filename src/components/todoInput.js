import React from 'react'
import Styled from 'styled-components'
import moment from 'moment'

const StyledInput = Styled.div`
width: 100%;
input {
    &:hover{
        transform: scale(1.1)
    }
    &:focus{
        outline: none;
    }
    width: 100%;
    text-align: center;
    height: 4rem;
    font-size: 1.25rem;
    background-color: rgba(150,230,255,0.9);
    border: none;
}
button {
    &:hover{
        transition: 0.5s;
        box-shadow: 0px 0px 5px black;
    }
    &:focus{
        outline: none;
    }
    width: 100%;
    height: 2.75rem;
}
#submitBtn {
    &:hover{
        transform: scale(1.1);
        background-color: rgba(51, 255, 87, 0.9);
        border: 3px solid rgba(51, 255, 87, 1)
    }
    background-color: rgba(51, 255, 87, 0.5);
    border: none;
}
#clearBtn {
    &:hover{
        transform: scale(1.1);
        background-color: rgba(247, 188, 33, 0.9);
        border: 3px solid rgba(247, 188, 33, 1)
    }
    background-color: rgba(247, 188, 33, 0.5);
    border: none;
}
`

const TodoInput = props => {
const { onHandleChanges, formData, setFormData , dispatch} = props

    return(
        <StyledInput>
            <form>
                <input
                    type='text'
                    placeholder='Add a todo'
                    onChange={onHandleChanges}
                    value={formData}
                ></input>
                <button id="submitBtn" onClick={(evt) => {
                    evt.preventDefault()
                    if(formData !== '' ){
                        dispatch({type: 'SUBMIT_TODO', payload: {item: formData, completed: false, id: new Date(), timestamp: moment().format('MMMM Do YYYY, h:mm:ss a') } })
                        setFormData('') 
                    }
                    }}>Submit</button>
            </form>
            <button
                id="clearBtn"
                onClick={() => {
                dispatch({type: 'CLEAR_COMPLETE'})
                }}
                >Clear Completed
            </button>
        </StyledInput>
    )
}

export default TodoInput