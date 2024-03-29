import React from 'react';

import { withStyles } from '@material-ui/styles';
import { withTheme } from '@material-ui/styles';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import CalendarTodayRoundedIcon from '@material-ui/icons/CalendarTodayRounded';
import PayItem from './PayItem';

function ThisMonth(props) {
  const { classes } = props;
  const dummyData = {
    1: {
      pk: 1,
      id: 1,
      user_name: 'instagram',
      post_count: 43234,
      type: 'hashtag',
      description: 'Hi! I am instagram!',
    },
    2: {
      pk: 2,
      id: 2,
      user_name: 'rotterdam',
      post_count: 233443,
      type: 'hashtag',
      description: '',
    },
    3: {
      pk: 3,
      id: 3,
      user_name: 'instagram',
      post_count: 3333,
      type: 'user',
      description: 'Hi! I am instagram!',
    },
    4: {
      pk: 4,
      id: 4,
      user_name: 'ronaldo',
      post_count: 234,
      type: 'user',
      description: 'Hi! I am instagram!',
    },
    5: {
      pk: 5,
      id: 5,
      user_name: 'snow',
      post_count: 3447745,
      type: 'hashtag',
      description: '',
    },
    6: {
      pk: 6,
      id: 46,
      user_name: 'facebook',
      post_count: 231,
      type: 'user',
      description: 'Hi! I am facebook!',
    },
    7: {
      pk: 7,
      id: 7,
      user_name: 'rotterdam',
      post_count: 233443,
      type: 'hashtag',
      description: '',
    },
    8: {
      pk: 8,
      id: 8,
      user_name: 'instagram',
      post_count: 3333,
      type: 'user',
      description: 'Hi! I am instagram!',
    },
    9: {
      pk: 9,
      id: 9,
      user_name: 'ronaldo',
      post_count: 234,
      type: 'user',
      description: 'Hi! I am instagram!',
    },
    10: {
      pk: 10,
      id: 10,
      user_name: 'snow',
      post_count: 3447745,
      type: 'hashtag',
      description: '',
    },
    11: {
      pk: 5,
      id: 5,
      user_name: 'snow',
      post_count: 3447745,
      type: 'hashtag',
      description: '',
    },
    12: {
      pk: 6,
      id: 46,
      user_name: 'facebook',
      post_count: 231,
      type: 'user',
      description: 'Hi! I am facebook!',
    },
    13: {
      pk: 7,
      id: 7,
      user_name: 'rotterdam',
      post_count: 233443,
      type: 'hashtag',
      description: '',
    },
    14: {
      pk: 8,
      id: 8,
      user_name: 'instagram',
      post_count: 3333,
      type: 'user',
      description: 'Hi! I am instagram!',
    },
    15: {
      pk: 9,
      id: 9,
      user_name: 'ronaldo',
      post_count: 234,
      type: 'user',
      description: 'Hi! I am instagram!',
    },
    16: {
      pk: 10,
      id: 10,
      user_name: 'snow',
      post_count: 3447745,
      type: 'hashtag',
      description: '',
    },
  };
  const list = Object.values(dummyData).map((item, idx) => {
    return <PayItem key={idx} data={item} />;
  });

  return (
    <Box className={`${classes.root} ${classes.flexStart}`}>
      <Grid container className={classes.rowLarge}>
        <Grid item xs={7}>
          <Typography>이번 달 총 결제예정 금액</Typography>
        </Grid>
        <Grid item xs={3}>
          <Typography>50,000</Typography>
        </Grid>
        <Grid item xs={2}>
          <Typography>
            <CalendarTodayRoundedIcon />
          </Typography>
        </Grid>
      </Grid>

      <Box className={classes.rowLarge}>
        <Typography>이번달 결제 된 구독 서비스</Typography>
      </Box>
      {list}
      <Box className={classes.rowLarge}>
        <Typography>이번달 결제해야하는 구독 서비스</Typography>
      </Box>
      {list}
    </Box>
  );
}

const componentStyle = withStyles(theme => ({
  root: theme.styles.Default.Box.root,
  flexStart: { alignContent: 'flex-start' },
  row: theme.styles.Default.Box.row,
  rowLarge: theme.styles.Default.Box.rowLarge,
}));

export default withTheme(componentStyle(ThisMonth));
