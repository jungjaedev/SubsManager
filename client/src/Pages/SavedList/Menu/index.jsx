import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { withStyles } from '@material-ui/styles';
import { withTheme } from '@material-ui/styles';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';

import { updateMenuAction } from '../../../Data/pages/savedList';

function Menu(props) {
  const { classes } = props;
  const dispatch = useDispatch();

  const [isCurrent, setIsCurrent] = useState('');
  const handleList = menu => {
    dispatch(updateMenuAction(menu));
    setIsCurrent(menu);
  };

  const checkCurrent = menu => {
    if (menu === isCurrent) return 'secondary';
    return 'primary';
  };

  return (
    <Box className={classes.root}>
      <Grid className={classes.rowLarge} item xs={6}>
        <Box className={classes.centerCenter}>
          <Button color={checkCurrent('hashtag')} onClick={() => handleList('hashtag')}>
            <Typography variant="body1">해시태그</Typography>
          </Button>
        </Box>
      </Grid>
      <Grid className={classes.rowLarge} item xs={6}>
        <Box className={classes.centerCenter}>
          <Button color={checkCurrent('user')} onClick={() => handleList('user')}>
            <Typography variant="body1">사람</Typography>
          </Button>
        </Box>
      </Grid>
    </Box>
  );
}

const componentStyle = withStyles(theme => ({
  root: theme.styles.Default.Box.root,
  rowLarge: theme.styles.Default.Box.rowLarge,
  centerCenter: theme.styles.Default.Box.centerCenter,
}));

export default withTheme(componentStyle(Menu));
