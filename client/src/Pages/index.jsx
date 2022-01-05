import React from "react";
import { useSelector } from "react-redux";

import { withStyles } from "@material-ui/styles";
import { withTheme } from "@material-ui/styles";

import Box from "@material-ui/core/Box";

import { activeMenu } from "../Data/manager";

import SavedList from "./SavedList";
import SavedFeedList from "./SavedFeedList";
// import UserHome from './UserHome';
import Search from "./Search";

function Pages(props) {
  const { classes } = props;
  const active = useSelector(activeMenu);

  const activeComponent = () => {
    if (active === "savedList") return <SavedList />;
    else if (active === "search") return <Search />;
    else if (active === "savedFeed") return <SavedFeedList />;
    return <SavedList />;
  };
  return <Box className={classes.overflow}>{activeComponent}</Box>;
}

const componentStyle = withStyles((theme) => ({
  overflow: theme.styles.Default.Box.overflow,
}));

export default withTheme(componentStyle(Pages));
