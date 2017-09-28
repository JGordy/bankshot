import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {Link} from 'react-router-dom';
import {selectAccount} from '../actions/index';

class AccountDetail extends Component {

  render() {
    console.log("this.state: ", this.state);
    console.log("this.props: ",this.props);
    return (
      <div className="AccountDetail">

      </div>
    );
  }
}

// AccountDetail should have access to the user that was selected and their account information. You will need to mapStateToProps as you did in the UserDetail container component.
// the state should reflect the reducers selectedUser and selectedAccount.

function mapStateToProps(state) {
  console.log(state);
  const userIdx = state.users.findIndex(user => user._id === state.selectedUser);
  const accountIdx = state.users[userIdx].accounts.findIndex(account => account.id === state.selectedAccount);
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
