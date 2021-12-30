import React, { Component } from "react";
import { connect } from "react-redux";

import { withStyles } from "@material-ui/styles";
import { withTheme } from "@material-ui/styles";

import Box from "@material-ui/core/Box";

import Header from "./Header";
import Body from "./Body";
// import Footer from './Footer';

const mapStateToProps = (state) => {
  return {};
};

class Structure extends Component {
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
        <Header />
        <Body />
      </Box>
    );
  }
}

const componentStyle = withStyles((theme) => ({
  root: theme.styles.Default.Box.root,
}));

export default connect(mapStateToProps)(withTheme(componentStyle(Structure)));
