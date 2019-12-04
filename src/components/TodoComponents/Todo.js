import React from "react";
import "./Todo.css";

class Todo extends React.Component {
    // constructor() {
    //     super();   
    // };

    render() {
        return (
            <p className={this.props.completed ? '' : 'strike'} onClick={this.props.markCompleted} id={this.props.id}>{this.props.task}</p>
        )
    }
}

export default Todo;