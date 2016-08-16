import React from 'react'
import {Link} from 'react-router'

require('vendor/vendor.scss');

export class App extends React.Component {
  render() {
    return (
      <div>
        React Example
        <div>
          <Link to='/counter'>
            <button> Counter Page</button>
          </Link>
          <Link to='/about'>
            <button> About Page</button>
          </Link>
          <Link to='/todo'>
            <button>Todo Page</button>
          </Link>
        </div>
        {this.props.children}
      </div>
    )
  }
}
