import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";

const Todos = () => {
    const todos  // retrieve todos from reducer state and assign to
        = useSelector(state => state.todos); // local todos constant
    const [todo, setTodo] = useState({do: '', done: false}); // create todo local state variable

    const dispatch = useDispatch();

    const updateTodoClickHandler = (todo) => {  //handle checkbox click
        const action = {  // create new action
            type: 'update-todo',  // with update-todo event
            todo          // include todo object
        };
        dispatch(action);  // send it to all reducers
    }


    const deleteTodoClickHandler = (todo) => {
        console.log(todo);
        const action = {
            type: 'delete-todo',
            todo
        };
        dispatch(action);
    }


    const createTodoClickHandler = () => {
        const action = {
            type: 'create-todo',
            todo           // payLoad
        };
        dispatch(action);  // send action to reducers
    }

    const todoChangeHandler = (event) => {  // handle keystroke changes in input field
        const doValue = event.target.value; // get data from input field
        const newTodo = {       // create new todo object instance
            do: doValue         // setting the todo's do property
        };
        setTodo(newTodo);       // change local state todo variable
    }


    return(
        <>
            <h3>Todos</h3>
            <ul className="list-group">
                <li className="list-group-item">
                    <input
                        onChange={todoChangeHandler}   // handle keystrokes to update component state
                        value={todo.do}                // update field with latest state value
                        className="form-control"/>
                    <button onClick={createTodoClickHandler}
                            className="btn btn-primary">
                        Create New Todo
                    </button>
                </li>
                {
                    todos.map(todo =>
                        <li className="list-group-item">
                            <input checked={todo.done}  // create a checkbox
                                   onChange={(event) =>
                                       updateTodoClickHandler(   // if checkbox changes, update with new value
                                           {...todo,  // copy old state and overwrite with target.checked
                                               done: event.target.checked})}
                                   type="checkbox"/>
                            {todo.do}
                            <button onClick={() =>
                                deleteTodoClickHandler(todo)}
                                    className="btn btn-danger float-end">
                                Delete
                            </button>
                        </li>
                    )
                }
            </ul>

        </>
    );
};
export default Todos;