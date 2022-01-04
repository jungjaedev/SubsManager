import React, { Component } from "react";

import { withStyles } from "@material-ui/styles";
import { withTheme } from "@material-ui/styles";

import Box from "@material-ui/core/Box";

import Header from "./Header";
import Body from "./Body";
import Menubar from "./Menubar";

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
        <Menubar />
      </Box>
    );
  }
}

const componentStyle = withStyles((theme) => ({
  root: theme.styles.Default.Structure.page,
}));

export default withTheme(componentStyle(Structure));
