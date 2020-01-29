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
            {items.map(item => {return <TodoItem title={item.title} key={item.id}/>})}
        </ul>
    );
}
