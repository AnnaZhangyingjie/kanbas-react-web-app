import JavaScript from "./JavaScript";
import PathParameters from "./PathParameters";
import Classes from "./Classes";
import Styles from "./Styles";
import ConditionalOutput from "./ConditionalOutput";
import TodoItem from "./Todo/TodoItem";
import TodoList from "./Todo/TodoList";
function Assignment3() {
    return (
        <div className="container">
            <h1>Assignment 3</h1>
            <TodoList></TodoList>
            <TodoItem></TodoItem>
            <ConditionalOutput/>
            <Styles/>
            <Classes/>
            <JavaScript />
            <PathParameters />
        </div>
    );
}

export default Assignment3;