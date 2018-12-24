import React, { Component } from "react";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";

const styles = {
  card: {
    minWidth: 275
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)"
  },
  title: {
    fontSize: 14
  },
  pos: {
    marginBottom: 12
  }
};

class Account extends Component {
  constructor(props) {
    super(props);

    this.state = { accounts: [] };
  }

  componentDidMount() {
    fetch("http://10.103.50.39:2200/accounts")
      .then(result => {
        return result.json();
      })
      .then(result => {
        this.setState({
          accounts: result
        });
      });
  }

  render() {
    const { classes } = this.props;
    return (
      <div>
        <h2> This is the account page </h2>

        {this.state.accounts.map(curAccount => {
          return (
            <Card className={classes.card}>
              <CardContent>
                <Typography
                  className={classes.title}
                  color="textSecondary"
                  gutterBottom
                >
                  {curAccount.id || curAccount.currentId}
                </Typography>
                <Typography variant="h5" component="h2" />
                <Typography className={classes.pos} color="textSecondary">
                  {curAccount.balance || curAccount.accountBalance}
                </Typography>
                <Typography component="p">
                  {curAccount.account_number || curAccount.accountNumber}
                </Typography>
                <Typography component="p">
                  {curAccount.owner}
                  {/* {JSON.parse(curAccount.owner).map(owner => {
                    return <span>{owner}</span>;
                  })} */}
                </Typography>
              </CardContent>
            </Card>
          );
        })}
      </div>
    );
  }
}

export default withStyles(styles)(Account);
