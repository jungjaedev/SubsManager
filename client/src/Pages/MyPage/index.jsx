import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { withStyles } from '@material-ui/styles';
import { withTheme } from '@material-ui/styles';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { updateNewUserInfoAction } from '../../Data/user';
import { logoutUserFuction } from '../../Data/authentication';

import DetailItem from './DetailItem';
import DetailSelect from './DetailSelect';

function MyPage(props) {
  const { classes } = props;
  const dispatch = useDispatch();
  const newUserInfo = useSelector((state) => state.user.newUserInfo);
  const userInfo = useSelector((state) => state.user.userInfo);
  const language = useSelector((state) => state.manager.language);
  const currency = useSelector((state) => state.manager.currency);

  useEffect(() => {
    dispatch(updateNewUserInfoAction(userInfo));
  }, [dispatch, userInfo]);

  const handleChange = (key, event) => {
    const userData = { ...newUserInfo };
    userData[key] = event.target.value;
    dispatch(updateNewUserInfoAction(userData));
  };

  const handleDeleteAccount = () => {
    console.log('탈퇴!!');
  };

  const handleLogout = () => {
    dispatch(logoutUserFuction());
  };

  const defaultLanguage = language.find(item => {
    return item.id === userInfo.languageId;
  });

  const defaultCurrency = currency.find(item => {
    return item.id === userInfo.currencyId;
  });

  return (
    <Box className={classes.root}>
      <Box className={classes.row}>
        <Grid item xs={8}></Grid>
        <Grid item xs={4}>
          <Button onClick={() => handleLogout()}>
            <Typography variant="body1">로그아웃</Typography>
          </Button>
        </Grid>
      </Box>
      <Box className={classes.root}>
        <DetailItem handleChange={handleChange} label="account" />
        <DetailItem handleChange={handleChange} label="email" />
        <DetailItem handleChange={handleChange} label="password" />
        <DetailSelect data={language} label="언어설정" id="languageId" handleChange={handleChange} defaultData={defaultLanguage} />
        <DetailSelect data={currency} label="통화설정" id="currencyId" handleChange={handleChange} defaultData={defaultCurrency} />
      </Box>
      <Box className={classes.row}>
        <Grid item xs={8}></Grid>
        <Grid item xs={4}>
          <Button onClick={() => handleDeleteAccount()}>
            <Typography variant="body1">회원탈퇴</Typography>
          </Button>
        </Grid>
      </Box>
    </Box>
  );
}

const componentStyle = withStyles(theme => ({
  root: theme.styles.Default.Box.root,
  row: theme.styles.Default.Box.row,
}));

export default withTheme(componentStyle(MyPage));
