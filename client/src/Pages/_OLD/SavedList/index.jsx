import React from 'react';
import { useSelector } from 'react-redux';

import { withStyles } from '@material-ui/styles';
import { withTheme } from '@material-ui/styles';

import Box from '@material-ui/core/Box';

import HashList from './HashList';
import Menu from './Menu';
import UserList from './UserList';

import { activeMenu } from '../../Data/pages/savedList';

function SavedList(props) {
  const { classes } = props;

  const active = useSelector(activeMenu);

  const activeComponent = () => {
    return active !== 'user' ? <HashList /> : <UserList />;
  };

  return (
    <Box className={classes.root}>
      <Box className={classes.root}>
        <Menu />
        <Box className={classes.root}>{activeComponent}</Box>
      </Box>
    </Box>
  );
}

const componentStyle = withStyles(theme => ({
  root: theme.styles.Default.Box.root,
}));

export default withTheme(componentStyle(SavedList));
