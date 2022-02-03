import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { withStyles } from '@material-ui/styles';
import { withTheme } from '@material-ui/styles';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
// import InputLabel from '@material-ui/core/InputLabel';
import { language, currency } from '../../Data/manager';
import { userInfo, updateNewUserInfoAction, newUserInfo } from '../../Data/user';

import DetailItem from './DetailItem';
import DetailSelect from './DetailSelect';

function MyPage(props) {
  const { classes } = props;
  const dispatch = useDispatch();
  const user = useSelector(userInfo);
  const newUser = useSelector(newUserInfo);
  const languages = useSelector(language);
  const currencies = useSelector(currency);

  useEffect(() => {
    dispatch(updateNewUserInfoAction(user));
  }, [dispatch, user]);

  const handleChange = (key, event) => {
    const userData = { ...newUser };
    userData[key] = event.target.value;
    dispatch(updateNewUserInfoAction(userData));
  };

  const handleDeleteAccount = () => {
    console.log('탈퇴!!');
  };

  const handleLogout = () => {
    console.log('로그아웃!!');
  };

  const defaultLanguage = languages.find(item => {
    return item.id === user.languageId;
  });

  const defaultCurrency = currencies.find(item => {
    return item.id === user.currencyId;
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
        <DetailSelect data={languages} label="언어설정" id="languageId" handleChange={handleChange} defaultData={defaultLanguage} />
        <DetailSelect data={currencies} label="통화설정" id="currencyId" handleChange={handleChange} defaultData={defaultCurrency} />
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
