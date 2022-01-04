import React from 'react';

import { withStyles } from '@material-ui/styles';
import { withTheme } from '@material-ui/styles';

import Box from '@material-ui/core/Box';

import HashList from './HashList';
import Menu from './Menu';
// import UserList from './UserList';

function SavedList(props) {
  const { classes } = props;

  return (
    <Box className={classes.root}>
      <Box className={classes.root}>
        <Menu />
      </Box>
      <Box className={classes.root}>
        <HashList />
      </Box>
    </Box>
  );
}

const componentStyle = withStyles(theme => ({
  root: theme.styles.Default.Box.root,
}));

export default withTheme(componentStyle(SavedList));
