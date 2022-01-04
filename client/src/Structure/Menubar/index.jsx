import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { withStyles } from "@material-ui/styles";
import { withTheme } from "@material-ui/styles";
import ViewListRoundedIcon from "@material-ui/icons/ViewListRounded";
import SearchRoundedIcon from "@material-ui/icons/SearchRounded";
import BookmarkBorderRoundedIcon from "@material-ui/icons/BookmarkBorderRounded";
import IconButton from "@material-ui/core/IconButton";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
//Reducer
import { selectMenu } from "../../Data/Manager";

function Menubar(props) {
  const { classes } = props;
  const dispatch = useDispatch();
  const handleList = (menu) => {
    console.log(menu);
    dispatch(selectMenu(menu));
  };
  return (
    <Box className={classes.footer}>
      <Grid className={classes.center} item xs={4}>
        <IconButton color="secondary" onClick={() => handleList("savedList")}>
          <ViewListRoundedIcon />
        </IconButton>
      </Grid>
      <Grid className={classes.center} item xs={4}>
        <IconButton color="secondary" onClick={() => handleList("search")}>
          <SearchRoundedIcon />
        </IconButton>
      </Grid>
      <Grid className={classes.center} item xs={4}>
        <IconButton>
          <BookmarkBorderRoundedIcon />
        </IconButton>
      </Grid>
    </Box>
  );
}

const componentStyle = withStyles((theme) => ({
  root: theme.styles.Default.Box.root,
  center: theme.styles.Default.Box.centerCenter,
  footer: theme.styles.Default.Structure.footer,
}));

export default withTheme(componentStyle(Menubar));
