import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {withdrawFunds, selectUser, selectAccount} from '../actions/index';
// import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';



class Transaction extends Component {

  constructor(props) {
    super(props);
    this.state = {
      modal: false
    }
      // console.log("Transaction Component this.props",this.props);
  }

  render() {
    console.log("Transaction render: this.props",this.props.props.account.accountType);
    return (
      <div className="Transaction">
        <h1 className="modal_header">Make a Withdrawal</h1>
        <p>Please select an amount to withdraw from your {this.props.props.account.accountType} account. Your current balance is: {this.props.props.account.balance}</p>
        <span className="btn btn-primary" onClick={() => this.props.withdrawFunds(5)}>$5</span>
        <span className="btn btn-success" onClick={() => this.props.withdrawFunds(10)}>$10</span>
        <span className="btn btn-info" onClick={() => this.props.withdrawFunds(20)}>$20</span>
        <button className="btn btn-danger" onClick={this.props.toggle}>Cancel</button>
      </div>
    );
  }
}


function mapStateToProps(state) {
  /*
    You will need to create a similar mapStateToProps as the one used in the AccountDetail component.
  */
  // const userIdx = state.users.findIndex(user => user._id === state.selectedUser);
  // const accountIdx = state.users[userIdx].accounts.findIndex(account => account.id === state.selectedAccount.id);
  // return {
  //   account: state.users[userIdx].accounts[accountIdx],
  //   user: state.users[userIdx]
  // };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        withdrawFunds: withdrawFunds,
        selectUser: selectUser,
        selectAccount: selectAccount
    }, dispatch)
}


export default connect(mapStateToProps,  mapDispatchToProps
)(Transaction);
