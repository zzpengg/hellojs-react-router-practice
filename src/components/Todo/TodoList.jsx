import React, { Component, PropTypes } from 'react'
import Todo from './Todo'

export default class TodoList extends Component {
  render() {
    return (
      <ul>
        {this.props.todos.map((todo, index) =>
          <Todo {...todo}
                key={index}
                onTodoClick={() => this.props.onTodoClick(index)}
                onDelClick={() => this.props.onDelClick(index)}/>
        )}
      </ul>
    )
  }
}

TodoList.propTypes = {
  onTodoClick: PropTypes.func.isRequired,
  todos: PropTypes.arrayOf(PropTypes.shape({
  text: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired
  }).isRequired).isRequired
}
