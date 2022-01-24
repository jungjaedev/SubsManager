import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { withStyles } from '@material-ui/styles';
import { withTheme } from '@material-ui/styles';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
// Reducer
import { newUserInfo, updateNewUserInfoAction, saveNewUserInfoAction } from '../../Data/user';
import { getAllAction, language, getAllFuction } from '../../Data/manager';

function SignUp(props) {
  const { classes } = props;
  const dispatch = useDispatch();
  const newUser = useSelector(newUserInfo);
  const newData = useSelector(language);

  const handleChange = (key, event) => {
    const user = { ...newUser };
    user[key] = event.target.value;
    dispatch(updateNewUserInfoAction(user));
  };

  const handleSignUp = () => {
    console.log('회원가입!!');
    dispatch(saveNewUserInfoAction());
  };

  useEffect(() => {
    // dispatch(getAllAction('language'));
    const languageData = getAllFuction('language');
    console.log('languageData : ', languageData);
    // dispatch(getAllAction('currency'));
  });
  console.log('newData : ', newData);
  return (
    <Box className={classes.root}>
      <Box className={classes.root}>
        <Box className={classes.row}>
          <TextField onChange={e => handleChange('account', e)} id="standard-basic" label="아이디" />
        </Box>
        <Box className={classes.row}>
          <TextField onChange={e => handleChange('email', e)} id="standard-basic" label="email" />
        </Box>
        <Box className={classes.row}>
          <TextField onChange={e => handleChange('password', e)} id="standard-basic" label="password" />
        </Box>
        <Box className={classes.row}>
          <TextField onChange={e => handleChange('password check', e)} id="standard-basic" label="password check" />
        </Box>
        <Box className={classes.row}>language</Box>
        <Box className={classes.row}>currency</Box>
        <Box className={classes.row}>
          <Grid item xs={8}></Grid>
          <Grid item xs={4}>
            <Button onClick={() => handleSignUp()}>
              <Typography variant="body1">회원가입</Typography>
            </Button>
          </Grid>
        </Box>
      </Box>
    </Box>
  );
}

const componentStyle = withStyles(theme => ({
  root: theme.styles.Default.Box.root,
  row: theme.styles.Default.Box.row,
}));

export default withTheme(componentStyle(SignUp));
