import React from 'react';

import { withStyles } from '@material-ui/styles';
import { withTheme } from '@material-ui/styles';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

function SubscriptionItem(props) {
  const { classes } = props;
  return (
    <Box className={classes.row}>
      <Grid item xs={2}>
        <Typography>날짜</Typography>
      </Grid>
      <Grid item xs={2}>
        IMG
      </Grid>
      <Grid item xs={3}>
        {props.data.user_name}
      </Grid>
      <Grid className={classes.row} item xs={4}>
        <Grid item xs={3}>
          {props.data.currency.symbol}
        </Grid>
        <Grid item xs={7} style={{ textAlign: 'right' }}>
          {parseInt(props.data.cost).toLocaleString()}
        </Grid>
      </Grid>
      <Grid item xs={1}>
        edit
      </Grid>
    </Box>
  );
}

const componentStyle = withStyles(theme => ({
  root: theme.styles.Default.Box.root,
  row: theme.styles.Default.Box.row,
}));

export default withTheme(componentStyle(SubscriptionItem));
