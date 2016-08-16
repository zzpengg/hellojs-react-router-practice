import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { addTodo, toggleTodo, delTodo } from 'actions/TodoActions'
import AddTodo from 'components/Todo/AddTodo'
import TodoList from 'components/Todo/TodoList'

class App extends Component {
  render() {
    const { dispatch, todos } = this.props
    {/*
      The code above is the same as
      const a = this.props.dispatch
      const b = this.props.todos
      tell me why
    */}
    return (
      <div>
        <AddTodo onAddClick={text => dispatch(addTodo(text))}></AddTodo>
        <TodoList todos={todos} onTodoClick={index => dispatch(toggleTodo(index))} onDelClick={index => dispatch(delTodo(index))}></TodoList>
      </div>
    )
  }
}

export default connect(state => state)(App);
