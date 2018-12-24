import React, { Component } from "react";

import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import DialogTitle from "@material-ui/core/DialogTitle";
import Dialog from "@material-ui/core/Dialog";
import TextField from "@material-ui/core/TextField";

const styles = theme => ({
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200
  },
  dense: {
    marginTop: 19
  },
  menu: {
    width: 200
  },
  button: {
    margin: theme.spacing.unit
  }
});
class AddAccount extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentAccount: {
        accountId: "",
        accountNumber: "",
        accountOwner: "",
        accountBalance: 0
      },
      resultMessage: "",
      isModalOpened: false
    };
    //resultMessage
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  handleInputChange = e => {
    let currentAccount = {
      ...this.state.currentAccount,
      [e.currentTarget.name]: e.target.value
    };

    this.setState(prevState => ({
      currentAccount
    }));

    // this.setState(prevState => ({
    //   currentAccount: {
    //     ...prevState.currentAccount,
    //     [e.currentTarget.name]: e.target.value
    //   }
    // }));
  };

  handleClose = () => {
    this.setState(prevState => ({
      isModalOpened: false
    }));
  };

  createAccount = () => {
    //modeling
    fetch("http://localhost:2200/accounts", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(this.state.currentAccount)
    })
      .then(result => {
        return result.json();
      })
      .then(result => {
        this.setState({
          isModalOpened: true,
          resultMessage: result.message
        });
      });
  };

  render() {
    const { classes } = this.props;
    return (
      <div>
        <h2> Add New Account </h2>

        <TextField
          id="accountId"
          name="accountId"
          label="accountId"
          className={classes.textField}
          value={this.state.accountId}
          onChange={this.handleInputChange}
          margin="normal"
        />
        <TextField
          id="accountNumber"
          label="accountNumber"
          name="accountNumber"
          className={classes.textField}
          value={this.state.name}
          onChange={this.handleInputChange}
          margin="normal"
        />
        <TextField
          id="accountOwner"
          label="accountOwner"
          name="accountOwner"
          className={classes.textField}
          value={this.state.name}
          onChange={this.handleInputChange}
          margin="normal"
        />
        <TextField
          id="accountBalance"
          label="accountBalance"
          name="accountBalance"
          type="number"
          className={classes.textField}
          value={this.state.name}
          onChange={this.handleInputChange}
          margin="normal"
        />
        <Button
          variant="contained"
          color="primary"
          className={classes.button}
          onClick={this.createAccount}
        >
          create Account
        </Button>

        <Dialog
          onClose={this.handleClose}
          aria-labelledby="simple-dialog-title"
          open={this.state.isModalOpened}
        >
          <DialogTitle id="simple-dialog-title">
            {this.state.resultMessage}
          </DialogTitle>
          <div />
        </Dialog>
      </div>
    );
  }
}

AddAccount.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(AddAccount);
