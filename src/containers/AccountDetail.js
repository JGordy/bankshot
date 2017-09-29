import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {Link} from 'react-router-dom';
import {withdrawFunds} from '../actions/index';
import Transaction from './Transaction';
// import {Button} from 'reactstrap';
import Modal from 'react-modal';

const customStyles = {
  overlay: {
    position          : 'fixed',
    top               : 0,
    left              : 0,
    right             : 0,
    bottom            : 0,
    backgroundColor   : 'rgba(0, 0, 0, 0.3)'
  },
  content: {
    position              : 'absolute',
    top                   : '30%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};

class AccountDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalOpen: false,
      newProps: {}
    }
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
   this.setState({
     isModalOpen: !this.state.isModalOpen
   });
  }

  openModal(){
   this.setState({isModalOpen: true})
 }

 closeModal(){
   this.setState({isModalOpen: false})
 }

  componentDidMount() {
    this.setState( {newProps: this.props})
  }

  render() {
    let n = 1;
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
            <button className="btn btn-danger" onClick={this.toggle}>Withdraw Funds</button>
            <Link className="btn btn-primary back_users" to="/users/:id">Back to User Details</Link>
          </div>
        </div>

        {/* next lines are for the modal*/}

        <Modal
          isOpen={this.state.isModalOpen}
          onRequestClose={this.closeModal}
          closeTimeoutMS={n}
          shouldCloseOnOverlayClick={true}
            style={customStyles}
          contentLabel="Example Modal">
          <div className="modal_background">
            <Transaction account={this.props.account} toggle={this.toggle}/>
          </div>
        </Modal>

      </div>
    );
  }
}

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

export default connect(mapStateToProps, mapDispatchToProps)(AccountDetail);
