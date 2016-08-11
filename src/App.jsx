import React from 'react'
import {Link} from 'react-router'

require('vendor/vendor.scss');

export class App extends React.Component {
  render() {
    return (
      <div>
        React Example
        <div>
          
        </div>
        {this.props.children}
      </div>
    )
  }
}
