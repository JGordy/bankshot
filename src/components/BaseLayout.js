import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';

export default class BaseLayout extends Component {
  render() {
    return (
      <div className='BaseLayout'>
        <nav className="nav">
          <NavLink activeClassName="selected" exact to='/bankshot/'>Bankshot
          </NavLink>
          <NavLink activeClassName="selected" exact to='/bankshot/'>Home
          </NavLink>
          <NavLink activeClassName="selected" to='/bankshot/users'>Users
          </NavLink>
        </nav>
        <div className="">
          {this.props.children}
        </div>
      </div>
    );
  }
};
