import React, {useContext} from "react";
import Context from "../context";

export default function ({title, id, completed}) {
    const {toggleTodo, removeTodo} = useContext(Context);

    return <li style={{fontStyle: "italic"}}>
        <span className={completed ? "done": ""}>
            <input type="checkbox" id={"todo" + id} checked={completed} onChange={() => toggleTodo(id)}/>
            <label for={"todo" + id}>
                {title}
            </label>
        </span>
        <button onClick={() => removeTodo(id)}>x</button>
    </li>
}
