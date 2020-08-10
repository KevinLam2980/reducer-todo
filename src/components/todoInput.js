import React from 'react'

const TodoInput = props => {
const { onHandleChanges, formData, setFormData , dispatch} = props

    return(
        <div>
            <input
                type='text'
                placeholder='Enter a todo'
                onChange={onHandleChanges}
                value={formData}
            ></input>
            <button onClick={() => {
                dispatch({type: 'SUBMIT_TODO', payload: {item: formData, completed: false, id: new Date()} })
                setFormData('') 
                }}>Submit</button>
            <button
                onClick={() => {
                dispatch({type: 'CLEAR_COMPLETE'})
                }}
                >Clear Complete
            </button>
        </div>
    )
}

export default TodoInput