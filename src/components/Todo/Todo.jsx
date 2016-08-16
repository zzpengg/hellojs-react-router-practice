import React, { Component, PropTypes } from 'react'

export default class Todo extends Component {
  render() {
    return (
      <div>
        <button onClick={this.props.onDelClick}>X</button>
      <li onClick={this.props.onTodoClick}
        style={{
          textDecoration: this.props.completed ? 'line-through' : 'none',
          cursor: this.props.completed ? 'default' : 'pointer'
        }}>
        {this.props.text}
      </li>
      </div>
    )
  }
}

Todo.propTypes = {
  onTodoClick: PropTypes.func.isRequired,
  onDelClick: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired
}
