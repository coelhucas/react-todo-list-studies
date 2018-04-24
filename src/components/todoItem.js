import React from 'react';
import './todoItem.css'

export default class TodoItem extends React.Component{
  constructor(props){
    super(props);
  }

  removeTodo(id) {
    this.props.removeTodo(id);
  }

  render(){
    return(
      <div className="todoWrapper">
        <button className="removeTodo" onClick={(ev) => this.removeTodo(this.props.id)}>Done</button>{this.props.todo.text}
      </div>
    )
  }
}
