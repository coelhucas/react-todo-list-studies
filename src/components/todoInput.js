import React from 'react';
import './todoInput.css'

export default class TodoInput extends React.Component{
  constructor(props){
    super(props)

    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.addTodo = this.addTodo.bind(this);
  }

  handleChange(ev) {
    this.setState({value: ev.target.value});

  }

  addTodo(task){
    // Ensure the task text isn't empty
    if (task.length > 0) {
        this.props.addTodo(task);
        this.setState({value: ''});
    }
  }

  render() {
    return(
      <div>
        <input type="text" value={this.state.value} onChange={this.handleChange}  onKeyPress={(ev) => {
        if (ev.key === 'Enter') {
          this.addTodo(this.state.value);
          ev.preventDefault();
              }
            }
          }
        />
        <button className="btn btn-primary" onClick={() => this.addTodo(this.state.value)}>+</button>

      </div>
    );
  }
}
