import React from 'react';
import { useSelector } from 'react-redux';

import { withStyles } from '@material-ui/styles';
import { withTheme } from '@material-ui/styles';

import Box from '@material-ui/core/Box';

import { activeMenu } from '../Data/manager';

import Main from './Main';
import ThisMonth from './ThisMonth';
import Statistics from './Statistics';
import Manage from './Manage';
import MyPage from './MyPage';
// import SignIn from './SignIn';
// import SignUp from './SignUp';

function Pages(props) {
  const { classes } = props;
  const active = useSelector(activeMenu);

  const activeComponent = () => {
    if (active === 'thisMonth') return <ThisMonth />;
    else if (active === 'statistics') return <Statistics />;
    else if (active === 'manage') return <Manage />;
    else if (active === 'myPage') return <MyPage />;
    return <Main />;
    // return <SignIn />;
    // return <SignUp />;
  };
  return <Box className={classes.overflow}>{activeComponent}</Box>;
}

const componentStyle = withStyles(theme => ({
  overflow: theme.styles.Default.Box.overflow,
}));

export default withTheme(componentStyle(Pages));
