import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { withStyles } from "@material-ui/core/styles";
import { get } from "../../service/punkService";
import Grid from "@material-ui/core/Grid";
import ListBar from "../List/ListBar";

const styles = theme => ({
  container: {
    marginTop: 20,
    display: "flex",
    flexWrap: "wrap"
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 400
  },
  button: {
    margin: theme.spacing(1),
    height: 60
  },
  listContainer: {
    width: "100%",
    marginTop: 20,
  }
});

class Search extends Component {
  state = {
    food: "",
    beers: []
  };

  handleFood = e => this.setState({ food: e.target.value });

  search = e => {
    this.setState({ beers: [] });
    get(this.state.food)
      .then(res => res.json())
      .then(res => {
        let beerArray = [];
        res.forEach(element => {
          beerArray.push({
            id: element.id,
            name: element.name,
            description: element.description,
            first_brewed: element.first_brewed
          });
        });
        this.setState({ beers: beerArray });
      })
      .catch(err => {
        this.setState({ beers: [] });
        console.log(err);
      });
    //console.log(this.state.beers);
  };

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.container}>
        <Grid container spacing={10} justify="center">
          <Grid item>
            <form
              className={classes.container}
              noValidate
              onSubmit={this.search}
            >
              <div>
                <TextField
                  id="standard-basic"
                  className={classes.textField}
                  onChange={this.handleFood}
                  label="Food"
                  placeholder="e.g. spicy"
                  margin="normal"
                />
              </div>
              <div>
                <Button
                  variant="contained"
                  color="primary"
                  className={classes.button}
                  onClick={this.search}
                >
                  Search
                </Button>
              </div>
            </form>
          </Grid>
        </Grid>
        <div className={classes.listContainer}>
          <ListBar beers={this.state.beers} />
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(Search);
