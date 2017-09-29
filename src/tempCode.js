
<Modal
  isOpen={this.state.isModalOpen}
  onRequestClose={this.closeModal}
  closeTimeoutMS={n}
  shouldCloseOnOverlayClick={false}
  style={customStyles}
  contentLabel="Example Modal">
  <Transaction props={this.props}/>
 </Modal>





constructor(props) {
  super(props);
  this.state = {
    modal: false
  }
    console.log("Transaction Component this.props",this.props);
  this.toggle = this.toggle.bind(this);
}



toggle() {
 this.setState({
   isModalOpen: !this.state.isModalOpen
 });
}



<Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
  <ModalHeader toggle={this.toggle}>Make a Withdrawal</ModalHeader>
  <ModalBody>
    Please select an amount to withdraw from your {/*this.props.account.accountType*/} account. Your current balance is: {/*this.props.account.balance*/}
  </ModalBody>
  <ModalFooter>
    <Button color="primary" onClick={(event) => {this.toggle; this.props.withdrawFunds(5)}} >$5</Button>{' '}
    <Button color="success" onClick={(event) => {this.toggle; this.props.withdrawFunds(10)}}>$10</Button>
    <Button color="warning" onClick={(event) => {this.toggle; this.props.withdrawFunds(20)}}>$20</Button>
    <Button color="danger" onClick={this.toggle}>Cancel</Button>
  </ModalFooter>
</Modal>
