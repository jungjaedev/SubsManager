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
import SignIn from './SignIn';
import SignUp from './SignUp';

function Pages(props) {
  const { classes } = props;
  const active = useSelector(activeMenu);

  const components = {
    1: { name: 'thisMonth', component: <ThisMonth /> },
    2: { name: 'statistics', component: <Statistics /> },
    3: { name: 'manage', component: <Manage /> },
    4: { name: 'myPage', component: <MyPage /> },
    5: { name: 'signUp', component: <SignUp /> },
    // 6: { name: 'main', component: <Main /> },
    6: { name: 'main', component: <SignUp /> },
    7: { name: 'signIn', component: <SignIn /> },
  };

  const activeComponent = () => {
    const activePage = Object.values(components).find(page => {
      return page.name === active;
    });
    return activePage.component;
    // return <SignUp />;
  };

  return <Box className={classes.overflow}>{activeComponent}</Box>;
}

const componentStyle = withStyles(theme => ({
  overflow: theme.styles.Default.Box.overflow,
}));

export default withTheme(componentStyle(Pages));
