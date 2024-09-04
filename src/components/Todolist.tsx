import React from "react";
import "./style.css"
import {Todo} from "../model";
interface Props{
    todos: Todo[],
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
}

const Todolist: React.FC<Props> = ({todos, setTodos}:Props) =>{
    return(
        <div className="todos">
            {todos.map(todo =>(
                <li>{todo.todo}</li>
            ))}
        </div>
    )
}

export  default Todolist;