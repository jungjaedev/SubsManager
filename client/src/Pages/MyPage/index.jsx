import React, { useState } from 'react';

import { withStyles } from '@material-ui/styles';
import { withTheme } from '@material-ui/styles';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
// import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import NativeSelect from '@material-ui/core/NativeSelect';

import DetailItem from './DetailItem';

function MyPage(props) {
  const { classes } = props;
  const [isEdit, setIsEdit] = useState(false);
  const data = {
    account: 'Tester',
    email: 'test@test.com',
    password: 'asdfsadf',
    passwordCheck: 'asdfsadf',
    language: 'kr',
  };

  const languages = {
    1: { id: '1', name: 'English', display_name: 'English', code: 'en' },
    2: { id: '2', name: 'Korean', display_name: '한국어', code: 'kr' },
  };

  const menuItem = Object.values(languages).map((item, idx) => {
    return (
      <option key={idx} value={item.code}>
        {item.display_name}
      </option>
    );
  });

  const handleEdit = () => {
    setIsEdit(!isEdit);
  };

  const handleDeleteAccount = () => {
    console.log('탈퇴!!');
  };

  const handleLogout = () => {
    console.log('로그아웃!!');
  };

  const editText = isEdit ? '저장하기' : '내 정보 수정';

  const language = isEdit ? (
    <FormControl className={classes.formControl}>
      <NativeSelect value={data.language} onChange={() => console.log('selectBox')}>
        {menuItem}
      </NativeSelect>
    </FormControl>
  ) : (
    <Typography variant="body1">{data.language}</Typography>
  );

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
      <Box className={classes.row}>
        <Grid item xs={8}></Grid>
        <Grid item xs={4}>
          <Button onClick={() => handleEdit()}>
            <Typography variant="body1">{editText}</Typography>
          </Button>
        </Grid>
      </Box>
      <Box className={classes.root}>
        <DetailItem data={data} label="account" isEdit={isEdit} />
        <DetailItem data={data} label="email" isEdit={isEdit} />
        <DetailItem data={data} label="password" isEdit={isEdit} />
        <DetailItem data={data} label="passwordCheck" isEdit={isEdit} />
        <Box className={classes.row}>
          <Grid item xs={5}>
            <Typography variant="body1">언어설정</Typography>
          </Grid>
          <Grid item xs={7}>
            {language}
          </Grid>
        </Box>
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
