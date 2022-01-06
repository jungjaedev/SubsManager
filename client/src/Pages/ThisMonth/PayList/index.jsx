import React from 'react';

import { withStyles } from '@material-ui/styles';
import { withTheme } from '@material-ui/styles';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

function PayList(props) {
  const { classes } = props;

  return (
    <Box className={classes.row}>
      <Grid item xs={2}>
        <Typography>23일 목</Typography>
      </Grid>
      <Grid item xs={2}>
        IMG
      </Grid>
      <Grid item xs={3}>
        {props.data.user_name}
      </Grid>
      <Grid item xs={3}>
        11,000won
      </Grid>
      <Grid item xs={2}>
        edit
      </Grid>
    </Box>
  );
}

const componentStyle = withStyles(theme => ({
  root: theme.styles.Default.Box.root,
  row: theme.styles.Default.Box.row,
}));

export default withTheme(componentStyle(PayList));
