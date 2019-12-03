import React from "react";

class TodoForm extends React.Component {
    constructor() {
        super();

        this.state = {
            newItem: ''
        };
    }

    handleChanges = e => {
        this.setState({ newItem: e.target.value });
    }

    handleSubmit = e => {
        e.preventDefault();
        this.props.addItem(this.state.newItem);
    }

    handleComplete = e => {
        e.preventDefault();
        this.props.removeItem();
    }

    render() {
        return (
            <>
            <form onSubmit={this.handleSubmit}>
                <input type="text" value={this.state.newItem} onChange={this.handleChanges} name="item" />
                <button>Add Todo</button>
            </form>
            <button onClick={this.handleComplete}>Clear Completed</button>            
            </>
        )
    }
}

export default TodoForm;