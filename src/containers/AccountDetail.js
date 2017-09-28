import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {Link} from 'react-router-dom';
import {selectAccount} from '../actions/index';

class AccountDetail extends Component {

  render() {
    return (
      <div className="AccountDetail col-md-6">
        <div className= "card">
          <div className= "card-block">
            <h4 className= "card-title">Account Information</h4>
            <h6 className= "card-subtitle mb-2 text-muted">{this.props.account.accountType} for {this.props.user.name}</h6>
            <div className= "card-text">
              <div>Balance: {this.props.account.balance}</div>
            </div>
          </div>
          <Link className="btn btn-danger" to="/">Withdraw Funds</Link>
          <Link className="btn btn-primary" to="/users/:id">Back to User Details</Link>
        </div>
      </div>
    );
  }
}

// AccountDetail should have access to the user that was selected and their account information. You will need to mapStateToProps as you did in the UserDetail container component.
// the state should reflect the reducers selectedUser and selectedAccount.

function mapStateToProps(state) {
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
