import React from "react";

import { withStyles } from "@material-ui/styles";
import { withTheme } from "@material-ui/styles";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import TextField from '@material-ui/core/TextField';

import SearchList from "./SearchList";

function Search(props) {
  const { classes } = props;

  return (
    <Box className={classes.root}>
      <Grid item xs={12} className={classes.row}>
        {/* TODO: insert a search icon. + <Input />*/}
        <TextField variant="outlined" className={classes.searchField} label="검색">
        </TextField>
      </Grid>
      <Grid item xs={12}><SearchList /></Grid>
    </Box>
  );
}

const componentStyle = withStyles((theme) => ({
  root: theme.styles.Default.Box.root,
  row: theme.styles.Default.Box.row,
  searchField: {}
}));

export default withTheme(componentStyle(Search));
