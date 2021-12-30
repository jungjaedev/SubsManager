import React, { Component } from "react";
import { connect } from "react-redux";

import { withStyles } from "@material-ui/styles";
import { withTheme } from "@material-ui/styles";

import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";

const mapStateToProps = (state) => {
  return {};
};

class Body extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {}

  componentDidUpdate(prevProps) {}

  shouldComponentUpdate(nextProps, nextState) {
    return true;
  }
  render() {
    const { classes } = this.props;
    return (
    <Box className={classes.root}>
      <Grid container direction="column" spacing={2}>
          <Grid item>peeking list 50</Grid>
          <Grid container item>
            <Grid container item direction="row">
              <Grid container item xs={10}>
                <Grid item xs={2}>#</Grid>
                <Grid item xs={10} direction="column">
                  <Grid>#k-pop</Grid>
                  <Grid>게시물 5만</Grid>
                </Grid>
              </Grid>
              <Grid item xs={2}>x</Grid>
            </Grid>
          </Grid>
      </Grid>
    </Box>
    )
  }
}

const componentStyle = withStyles((theme) => ({}));

export default connect(mapStateToProps)(withTheme(componentStyle(Body)));
