import React from "react";
import TodoItem from "./TodoItem";

const styles = {
    ul: {
        listStyle: "none",
    },
};

export default function ({items}) {
    return (
        <ul style={styles.ul}>
            {
                items.length
                ? items.map(item => <TodoItem title={item.title}
                                             id={item.id}
                                             completed={item.completed}
                                             key={item.id}
                />)
                : "no items"
            }
        </ul>
    );
}
