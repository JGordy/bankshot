import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';

export default class BaseLayout extends Component {
  render() {
    return (
      <div className='BaseLayout'>
        <nav className="navbar">
          <NavLink activeClassName="selected" exact to='/'>Bankshot
          </NavLink>
          <NavLink activeClassName="selected" exact to='/'>Home
          </NavLink>
          <NavLink activeClassName="selected" to='/users'>Users
          </NavLink>
        </nav>
        <div className="">
          {this.props.children}
        </div>
      </div>
    )
  }
}
