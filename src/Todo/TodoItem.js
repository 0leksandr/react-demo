import React, {useContext} from "react";
import Context from "../context";

export default function ({title, id, completed, toggle}) {
    const {removeTodo} = useContext(Context);

    return <li style={{fontStyle: "italic"}}>
        <input type="checkbox" checked={completed} onChange={() => toggle(id)}/>
        <span className={completed ? "done": ""}>
            {title}
        </span>
        <button onClick={() => removeTodo(id)}>x</button>
    </li>
}
