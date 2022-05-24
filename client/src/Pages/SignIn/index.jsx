import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { withStyles } from '@material-ui/styles';
import { withTheme } from '@material-ui/styles';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

// import { updateMenuAction } from '../../Data/manager';
import { updateloginInfoAction, loginInfo, loginUserFuction } from '../../Data/authentication';

function SignIn(props) {
  const { classes } = props;
  const dispatch = useDispatch();
  const userInfo = useSelector(loginInfo);

  const handleSignIn = () => {
    dispatch(loginUserFuction());
  };

  const handleNoAccount = () => {
    dispatch(updateMenuAction('signUp'));
    // dispatch({type: 'manager/updateMenuAction', payload: 'signUp'})
  };

  const handleChange = (key, event) => {
    const loginUser = { ...userInfo };
    loginUser[key] = event.target.value;
    dispatch(updateloginInfoAction(loginUser));
  };

  return (
    <Box className={classes.root}>
      <Box className={classes.root}>
        <Box className={classes.row}>
          <TextField onChange={e => handleChange('account', e)} id="standard-basic" label="account" />
        </Box>
        <Box className={classes.row}>
          <TextField onChange={e => handleChange('password', e)} id="standard-basic" label="password" />
        </Box>
        <Box className={classes.row}>
          <Grid item xs={8}></Grid>
          <Grid item xs={4}>
            <Button onClick={() => handleSignIn()}>
              <Typography variant="body1">로그인</Typography>
            </Button>
          </Grid>
        </Box>
        <Box className={classes.row}>
          <Grid item xs={3}></Grid>
          <Grid item xs={8}>
            <Button onClick={() => handleNoAccount()}>
              <Typography variant="body1">아이디가 없으신가요?</Typography>
            </Button>
          </Grid>
        </Box>
        <Box className={classes.row}>
          <Grid item xs={3}></Grid>
          <Grid item xs={8}>
            <Typography variant="body1">비밀번호가 기억나지 않으세요?</Typography>
          </Grid>
        </Box>
      </Box>
      <Box className={classes.root}>
        <Box className={classes.row}>
          <Grid item xs={2}></Grid>
          <Grid item xs={8}>
            <Typography variant="body1">구글 로그인</Typography>
          </Grid>
        </Box>
        <Box className={classes.row}>
          <Grid item xs={2}></Grid>
          <Grid item xs={8}>
            <Typography variant="body1">페이스북 로그인</Typography>
          </Grid>
        </Box>
        <Box className={classes.row}>
          <Grid item xs={2}></Grid>
          <Grid item xs={8}>
            <Typography variant="body1">카카오톡 로그인</Typography>
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

export default withTheme(componentStyle(SignIn));
