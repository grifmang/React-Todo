import React from "react";
import Todo from "./Todo";

class TodoList extends React.Component {

    render() {

        return (
            <div>
            {this.props.data.map((element) => {
                return <Todo markCompleted={this.props.markCompleted} key={element.id} id={element.id} completed={element.completed} task={element.task}
                 />
            })}
            </div>
        )
    }
}

export default TodoList;
