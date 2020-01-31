import React, {useContext, useState} from "react";
import Context from "../context";

function useInput(defaultValue = "") {
    const [value, setValue] = useState(defaultValue);

    return {
        get: () => value,
        set: (value) => setValue(value),
        html: function () {
            return {
                value,
                onChange: evt => setValue(evt.target.value),
            };
        }
    };
}

export default function () {
    const input = useInput();
    const {addTodo} = useContext(Context);
    function submit(evt) {
        evt.preventDefault();
        addTodo(input.get());
        input.set('');
    }

    return (
        <form onSubmit={submit}>
            <input type="text" {...input.html()}/>
            <button type="submit">
                Add
            </button>
        </form>
    );
}
