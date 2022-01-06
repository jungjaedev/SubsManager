import React from "react";

import { withStyles } from "@material-ui/styles";
import { withTheme } from "@material-ui/styles";
import Box from "@material-ui/core/Box";

import Description from "./Description";
import Header from "./Header";
import Statistics from "./Statistics";
import Story from "./Story";

function UserHome(props) {
  const { classes } = props;

  return (
    <Box className={classes.root}>
      <Header />
      <Description />
      <Story />
      <Statistics />
    </Box>
  );
}

const componentStyle = withStyles((theme) => ({
  root: theme.styles.Default.Box.root,
}));

export default withTheme(componentStyle(UserHome));
