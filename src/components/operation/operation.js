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
class Operation extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentOperation: {
        accountNumber: "",
        amount: "",
        operation:""
        
      },
      resultMessage: "",
      isModalOpened: false
    };
    //resultMessage
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  handleInputChange = e => {
    let currentOperation = {
      ...this.state.currentOperation,
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

  doOperation = () => {
    //modeling
    fetch("http://localhost:2200/accounts", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(this.state.currentOperation)
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
        <h2> deposit/withdraw </h2>

        
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
          id="amount"
          label="amount"
          name="amount"
          type="number"
          className={classes.textField}
          value={this.state.name}
          onChange={this.handleInputChange}
          margin="normal"
        />
        <TextField
          id="operation"
          label="operation"
          name="operation"
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
          onClick={this.doOperation}
        >
          {this.state.operation}
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

doOperation.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(doOperation);
