import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {Link} from 'react-router-dom';
import {selectAccount} from '../actions/index';

class AccountDetail extends Component {

  render() {
    console.log("this.props: ",this.props);
    return (
      <div className="AccountDetail col-md-6">
        <div className= "card">
          <div className= "card-block">
            <h4 className= "card-title">Account Information</h4>
            <h6 className= "card-subtitle mb-2 text-muted">{this.props.user.name}</h6>
            <div className= "card-text">
              <div>{this.props.user.email}</div>
              <div>{this.props.user.phone}</div>
              <div>{this.props.user.address}</div>

            </div>
          </div>
          <Link className="btn btn-primary" to="/users" >Back to List of Users</Link>
        </div>
      </div>
    );
  }
}

// AccountDetail should have access to the user that was selected and their account information. You will need to mapStateToProps as you did in the UserDetail container component.
// the state should reflect the reducers selectedUser and selectedAccount.

function mapStateToProps(state) {
  console.log(" AccountDetail THHAAA STATE: ", state);
  const userIdx = state.users.findIndex(user => user._id === state.selectedUser);
  const accountIdx = state.users[userIdx].accounts.findIndex(account => account.id === state.selectedAccount.id);
  return {
    account: state.users[userIdx].accounts[accountIdx],
    user: state.users[userIdx]
  };
}



// function mapDispatchToProps(dispatch) {
//     return bindActionCreators({
//         selectAccount: selectAccount,
//         selectUser: selectUser
//     }, dispatch)
// }



// You will need to connect you mapStateToProps to the AccountDetail component and export it.

export default connect(mapStateToProps) (AccountDetail);
