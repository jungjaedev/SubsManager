import React, { useState } from 'react';

import { withStyles } from '@material-ui/styles';
import { withTheme } from '@material-ui/styles';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';

function MyPage(props) {
  const { classes } = props;
  const [isedit, setIsedit] = useState(false);
  const data = {
    name: 'Tester',
    email: 'test@test.com',
    password: 'asdfsadf',
    passwordCheck: 'asdfsadf',
    language: 'en',
  };

  const edit = () => {
    setIsedit(true);
  };

  return (
    <Box className={classes.root}>
      <Box className={classes.row}>
        <Grid item xs={8}></Grid>
        <Grid item xs={4}>
          <Typography variant="body1">로그아웃</Typography>
        </Grid>
      </Box>
      <Box className={classes.row}>
        <Grid item xs={8}></Grid>
        <Grid item xs={4}>
          <Typography variant="body1" onClick={() => edit()}>
            내 정보 수정
          </Typography>
        </Grid>
      </Box>
      <Box className={classes.root}>
        <Box className={classes.row}>
          <Grid item xs={5}>
            <Typography variant="body1" onClick={() => edit()}>
              아이디
            </Typography>
          </Grid>
          <Grid item xs={7}>
            {isedit ? (
              <TextField id="standard-basic" />
            ) : (
              <Typography variant="body1" onClick={() => edit()}>
                {data.name}
              </Typography>
            )}
          </Grid>
        </Box>
        <Box className={classes.row}>
          <Grid item xs={5}>
            <Typography variant="body1">이메일</Typography>
          </Grid>
          <Grid item xs={7}>
            <Typography variant="body1">{data.email}</Typography>
          </Grid>
        </Box>
        <Box className={classes.row}>
          <Grid item xs={5}>
            <Typography variant="body1">비밀번호</Typography>
          </Grid>
          <Grid item xs={7}>
            <Typography variant="body1">{data.password}</Typography>
          </Grid>
        </Box>
        <Box className={classes.row}>
          <Grid item xs={5}>
            <Typography variant="body1">비밀번호 확인</Typography>
          </Grid>
          <Grid item xs={7}>
            <Typography variant="body1">{data.passwordCheck}</Typography>
          </Grid>
        </Box>
        <Box className={classes.row}>
          <Grid item xs={5}>
            <Typography variant="body1">언어설정</Typography>
          </Grid>
          <Grid item xs={7}>
            <Typography variant="body1">{data.language}</Typography>
          </Grid>
        </Box>
      </Box>
      <Box className={classes.row}>
        <Grid item xs={8}></Grid>
        <Grid item xs={4}>
          <Typography variant="body1">회원탈퇴</Typography>
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
