import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { withStyles } from "@material-ui/styles";
import { withTheme } from "@material-ui/styles";
import Box from "@material-ui/core/Box";

function <componentName> (props) {
  const { classes } = props;
  const dispatch = useDispatch();
  return <Box className={classes.root}></Box>;
}

const componentStyle = withStyles((theme) => ({
  root: theme.styles.Default.Box.root,
}));

export default withTheme(componentStyle(<componentName>));
