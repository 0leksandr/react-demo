import React, {useContext, useState} from "react";
import Context from "../context";

export default function () {
    const [value, setValue] = useState('');

    const {addTodo} = useContext(Context);
    function submit(evt) {
        evt.preventDefault();
        addTodo(value);
        setValue('');
    }

    return (
        <form onSubmit={submit}>
            <input type="text" value={value} onChange={evt => setValue(evt.target.value)}/>
            <button type="submit">
                Add
            </button>
        </form>
    );
}
