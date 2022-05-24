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
      <Grid item xs={4}>
        {props.data.product.display_name}
      </Grid>
      <Grid item xs={4}>
        <Typography>
          every {props.data.billing_cycle}&nbsp;
          {props.data.period.display_name}
        </Typography>
      </Grid>
      <Grid className={classes.row} item xs={3}>
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
