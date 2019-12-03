import React from 'react';
import TodoForm from "./components/TodoComponents/TodoForm";
import TodoList from "./components/TodoComponents/TodoList";

const data = [
  {
    task: 'Do this',
    id: 666,
    completed: false
  },
  {
    task: 'Do that',
    id: 333,
    completed: true
  },
];

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      data: data
    };
  }
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  addItem = newItemText => {
    const newItem = {
      task: newItemText,
      id: Date.now(),
      completed: false
    };
    this.setState({
      data: [...this.state.data, newItem]
    });
  };

  removeItem = () => {
    this.setState({data: this.state.data.filter(element => {
      return element.completed;
    })})
  }

  markCompleted = (e) => {
    this.setState({data: this.state.data.map(element => {
      if (element.id === Number(e.target.id)) {
        element.completed = !element.completed;
      }
      return element;
    }
    )})
  }

  render() {
    return (
      <div>
        <TodoList markCompleted={this.markCompleted} data={this.state.data} />
        <h2>Add Tasks Below</h2>
        <TodoForm addItem={this.addItem} removeItem={this.removeItem}/>
      </div>
    );
  }
}

export default App;
