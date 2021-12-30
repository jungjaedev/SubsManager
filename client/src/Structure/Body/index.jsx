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
    return <Box className={classes.root}>body</Box>;
  }
}

const componentStyle = withStyles((theme) => ({}));

export default connect(mapStateToProps)(withTheme(componentStyle(Body)));
