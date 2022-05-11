import React from "react";

import { withStyles } from "@material-ui/styles";
import { withTheme } from "@material-ui/styles";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';

function Search(props) {
  const { classes } = props;

  return (
    <Box className={classes.root} mb={2}>
      <Grid item xs={12} className={classes.row}>
        {/* TODO: insert a search icon. + <Input />*/}
        <TextField className={classes.textField} label="검색">
          <IconButton type="submit" className={classes.iconButton} aria-label="search">
            <SearchIcon />
          </IconButton>
        </TextField>
      </Grid>
    </Box>
  );
}

const componentStyle = withStyles((theme) => ({
  row: theme.styles.Default.Box.row,
  root: theme.styles.Default.Box.root,
  textField: theme.styles.Default.TextField.root,
}));

export default withTheme(componentStyle(Search));
