import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { withStyles } from '@material-ui/styles';
import { withTheme } from '@material-ui/styles';

import Box from '@material-ui/core/Box';

import { activeMenu } from '../Data/manager';
import { isLoggedIn } from '../Data/user';
import { checkLoginFuction } from '../Data/authentication';

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
  const loggedIn = useSelector(isLoggedIn);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkLoginFuction());
  }, [dispatch]);

  const components = {
    1: { name: 'thisMonth', component: <ThisMonth /> },
    2: { name: 'statistics', component: <Statistics /> },
    3: { name: 'manage', component: <Manage /> },
    4: { name: 'myPage', component: <MyPage /> },
    5: { name: 'signUp', component: <SignUp /> },
    6: { name: 'main', component: <Main /> },
    7: { name: 'signIn', component: <SignIn /> },
  };

  const activeComponent = () => {
    if (!loggedIn && active !== 'signUp') {
      return <SignIn />;
    }
    const activePage = Object.values(components).find(page => {
      return page.name === active;
    }); 
    return activePage.component;
  };

  return <Box className={classes.overflow}>{activeComponent}</Box>;
}

const componentStyle = withStyles(theme => ({
  overflow: theme.styles.Default.Box.overflow,
}));

export default withTheme(componentStyle(Pages));
