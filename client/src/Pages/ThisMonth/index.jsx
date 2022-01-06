import React from 'react';

import { withStyles } from '@material-ui/styles';
import { withTheme } from '@material-ui/styles';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import CalendarTodayRoundedIcon from '@material-ui/icons/CalendarTodayRounded';

function ThisMonth(props) {
  const { classes } = props;

  return (
    <Box className={classes.root}>
      <Box className={classes.row}>
        <Typography>이번 달 총 결제예정 금액</Typography>
        <Typography>
          <CalendarTodayRoundedIcon />
        </Typography>
      </Box>
      <Box className={classes.row}>
        <Typography>이번달 결제 된 구독 서비스</Typography>
      </Box>
    </Box>
  );
}

const componentStyle = withStyles(theme => ({
  root: theme.styles.Default.Box.root,

  row: theme.styles.Default.Box.row,
}));

export default withTheme(componentStyle(ThisMonth));
