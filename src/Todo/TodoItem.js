import React, {useContext} from "react";
import Context from "../context";

export default function ({title, id, completed}) {
    const {toggleTodo, removeTodo} = useContext(Context);

    return <li style={{fontStyle: "italic"}}>
        <input type="checkbox" checked={completed} onChange={() => toggleTodo(id)}/>
        <span className={completed ? "done": ""}>
            {title}
        </span>
        <button onClick={() => removeTodo(id)}>x</button>
    </li>
}
