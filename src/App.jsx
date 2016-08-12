import React from 'react'
import {Link} from 'react-router'

require('vendor/vendor.scss');

export class App extends React.Component {
  render() {
    return (
      <div>
        React Example
        <div>

          <button className='btn btn-success'><Link to='/counter' >counter</Link></button>

          <button className='btn btn-success'><Link to='/about' >about</Link></button>

        </div>
        {this.props.children}
      </div>
    )
  }
}
