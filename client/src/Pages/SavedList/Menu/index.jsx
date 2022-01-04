import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { withStyles } from '@material-ui/styles';
import { withTheme } from '@material-ui/styles';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';

import { updateMenuAction, activeMenu } from '../../../Data/pages/savedList';

function Menu(props) {
  const { classes } = props;
  const dispatch = useDispatch();
  const todos = useSelector(activeMenu);
  console.log(todos);

  const handleList = menu => {
    console.log(11);
    dispatch(updateMenuAction(menu));
  };

  return (
    <Box className={classes.root}>
      <Grid className={classes.rowLarge} item xs={6}>
        <Box className={classes.centerCenter}>
          <Button onClick={() => handleList('hashtag')}>
            <Typography variant="body1">해시태그</Typography>
          </Button>
        </Box>
      </Grid>
      <Grid className={classes.rowLarge} item xs={6}>
        <Box className={classes.centerCenter}>
          <Button onClick={() => handleList('user')}>
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
