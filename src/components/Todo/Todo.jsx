import React, { Component, PropTypes } from 'react'

export default class Todo extends Component {
  render() {
    return (
      <div>
        <li onClick={this.props.onTodoClick}
          style={{
            textDecoration: this.props.completed ? 'line-through' : 'none',
            cursor: this.props.completed ? 'default' : 'pointer'
          }}>
          {this.props.text}
          <button onClick={this.props.onDelClick}>X</button>
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
