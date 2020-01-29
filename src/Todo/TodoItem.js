import React from "react";

export default function ({title, id, completed, toggle}) {
    return <li style={{fontStyle: "italic"}}>
        <input type="checkbox" checked={completed} onChange={() => toggle(id)}/>
        <span className={completed ? "done": ""}>
            {title}
        </span>
    </li>
}
