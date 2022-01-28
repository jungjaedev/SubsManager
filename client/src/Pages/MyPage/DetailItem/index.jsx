import React from 'react';

import { withStyles } from '@material-ui/styles';
import { withTheme } from '@material-ui/styles';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';

function DetailItem(props) {
  const { classes } = props;

  const name = props.isEdit ? (
    <TextField defaultValue={props.newUser[props.label]} id="standard-basic" />
  ) : (
    <Typography variant="body1">{props.data[props.label]}</Typography>
  );

  return (
    <Box className={classes.row}>
      <Grid item xs={5}>
        <Typography variant="body1">{props.label}</Typography>
      </Grid>
      <Grid item xs={7}>
        {name}
      </Grid>
    </Box>
  );
}

const componentStyle = withStyles(theme => ({
  row: theme.styles.Default.Box.row,
}));

export default withTheme(componentStyle(DetailItem));
