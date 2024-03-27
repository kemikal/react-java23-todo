/* eslint-disable react/prop-types */
import { useState } from 'react'

function AddTodoForm(props) {

    const [inputNewTodo, setInputNewTodo] = useState("");

    // const onChange = (e) => {
    //     console.log("ändring i formulär");
    //     setInpuNewTodo(e.target.value);
    // }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Spara formulär");
        props.updateTodos(inputNewTodo);
        setInputNewTodo("");
    }

    return(
        <form onSubmit={(handleSubmit)}>
            {inputNewTodo} <br/>
            <input type="text" value={inputNewTodo} onChange={(e) => setInputNewTodo(e.target.value)} />
            <button>Spara</button>
        </form>
    )
}

export default AddTodoForm;