import React from 'react';

import { withStyles } from '@material-ui/styles';
import { withTheme } from '@material-ui/styles';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';

function TextInput(props) {
  const { classes } = props;
  return (
    <Box className={classes.row}>
      <Grid item xs={3}>
        {props.name}
      </Grid>
      <Grid item xs={9}>
        <TextField />
      </Grid>
    </Box>
  );
}

const componentStyle = withStyles(theme => ({
  row: theme.styles.Default.Box.row,
}));

export default withTheme(componentStyle(TextInput));
