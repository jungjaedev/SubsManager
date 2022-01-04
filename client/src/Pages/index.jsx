import React from 'react';
import { useSelector } from 'react-redux';

import { withStyles } from '@material-ui/styles';
import { withTheme } from '@material-ui/styles';

import Box from '@material-ui/core/Box';

import { selectActiveMenu } from '../Data/manager';

import SavedList from './SavedList';
import SavedFeedList from './SavedFeedList';
import UserHome from './UserHome';

function Pages(props) {
  const { classes } = props;
  const activeMenu = useSelector(selectActiveMenu);
  console.log(123123, activeMenu);
  const activeComponent = () => {
    if (activeMenu === 'savedList') return <SavedList />;
    // if(activeMenu === 'search') return <SavedList />
    else if (activeMenu === 'savedFeed') return <SavedFeedList />;
    return <SavedList />;
  };
  return <Box className={classes.overflow}>{activeComponent}</Box>;
}

const componentStyle = withStyles(theme => ({
  overflow: theme.styles.Default.Box.overflow,
}));

export default withTheme(componentStyle(Pages));
