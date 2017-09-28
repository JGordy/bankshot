import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {Link} from 'react-router-dom';
import {withdrawFunds} from '../actions/index';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class AccountDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    }
    this.toggle = this.toggle.bind(this);
    console.log(this.props);
  }

  toggle() {
   this.setState({
     modal: !this.state.modal
   });
 }

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
          <div className="btn-container">
            {/*<Button color="danger" onClick={this.toggle}>Withdraw Funds</Button>*/}
            <span className="btn btn-primary" onClick={() => this.props.withdrawFunds(5)}>$5</span>
            <span className="btn btn-success" onClick={() => this.props.withdrawFunds(10)}>$10</span>
            <span className="btn btn-info" onClick={() => this.props.withdrawFunds(20)}>$20</span>
            <Link className="btn btn-primary back_users" to="/users/:id">Back to User Details</Link>
          </div>
        </div>
        {/*<Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>Make a Withdrawal</ModalHeader>
          <ModalBody>
            Please select an amount to withdraw from your {this.props.account.accountType} account. Your current balance is: {this.props.account.balance}
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={(event) => {this.toggle; this.props.withdrawFunds(5)}} >$5</Button>{' '}
            <Button color="success" onClick={(event) => {this.toggle; this.props.withdrawFunds(10)}}>$10</Button>
            <Button color="warning" onClick={(event) => {this.toggle; this.props.withdrawFunds(20)}}>$20</Button>
            <Button color="danger" onClick={this.toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>*/}
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



function mapDispatchToProps(dispatch) {
    return {
        withdrawFunds: fund => {
          dispatch(withdrawFunds(fund))
        }
    }
}



// You will need to connect you mapStateToProps to the AccountDetail component and export it.

export default connect(mapStateToProps, mapDispatchToProps)(AccountDetail);
