import React from 'react';

import { withStyles } from '@material-ui/styles';
import { withTheme } from '@material-ui/styles';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import ProductChart from './ProductChart';
import SubscriptionList from './SubscriptionList';

function Overview(props) {
  const { classes } = props;

  return (
    <Box className={classes.root}>
      <Box className={classes.row}>
        <Typography variant="body1">총 이용금액 : 50,000</Typography>
      </Box>
      <Box className={classes.row}>
        <Typography variant="body1">총 구독 서비스 : 5</Typography>
      </Box>
      <ProductChart />
      <SubscriptionList />
    </Box>
  );
}

const componentStyle = withStyles(theme => ({
  root: theme.styles.Default.Box.root,
  row: theme.styles.Default.Box.row,
}));

export default withTheme(componentStyle(Overview));
