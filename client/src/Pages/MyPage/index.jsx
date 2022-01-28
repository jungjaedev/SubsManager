import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

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
import { language, currency } from '../../Data/manager';
import { userInfo, updateNewUserInfoAction, resetNewUserInfoAction, newUserInfo } from '../../Data/user';

import DetailItem from './DetailItem';
import DetailSelect from './DetailSelect';

function MyPage(props) {
  const { classes } = props;
  const dispatch = useDispatch();
  const [isEdit, setIsEdit] = useState(false);
  const user = useSelector(userInfo);
  const newUser = useSelector(newUserInfo);
  const languages = useSelector(language);
  const currencies = useSelector(currency);

  const handleChange = (key, event) => {
    const userData = { ...user };
    userData[key] = event.target.value;
    dispatch(updateNewUserInfoAction(userData));
  };

  const handleEdit = () => {
    dispatch(updateNewUserInfoAction(user));
    setIsEdit(!isEdit);
  };

  const handleDeleteAccount = () => {
    console.log('탈퇴!!');
  };

  const handleLogout = () => {
    console.log('로그아웃!!');
  };

  const handleCancel = () => {
    dispatch(resetNewUserInfoAction());
    setIsEdit(!isEdit);
    console.log('handleCancel!');
  };

  const handleSave = () => {
    /* 
    Todo : post콜 성공후 isEdit 바꿔주기~~~~~
    dispatch();
    */
    console.log('save!');
  };

  const cancelBtn = isEdit ? (
    <Button onClick={() => handleCancel()}>
      <Typography variant="body1">취소</Typography>
    </Button>
  ) : null;

  const editBtn = isEdit ? (
    <Button onClick={() => handleSave()}>
      <Typography variant="body1">저장하기</Typography>
    </Button>
  ) : (
    <Button onClick={() => handleEdit()}>
      <Typography variant="body1">내 정보 수정</Typography>
    </Button>
  );

  const passwordCheck = isEdit ? <DetailItem newUser={newUser} data={user} label="passwordCheck" isEdit={isEdit} /> : null;

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
      <Box className={classes.row}>
        <Grid item xs={4}></Grid>
        <Grid item xs={4}>
          {cancelBtn}
        </Grid>
        <Grid item xs={4}>
          {editBtn}
        </Grid>
      </Box>
      <Box className={classes.root}>
        <DetailItem data={user} newUser={newUser} label="account" isEdit={isEdit} />
        <DetailItem data={user} newUser={newUser} label="email" isEdit={isEdit} />
        {/* <DetailItem data={user} newUser={newUser} label="password" isEdit={isEdit} />
        {passwordCheck} */}
        <Box className={classes.row}>
          <Grid item xs={5}>
            <Typography variant="body1">언어설정</Typography>
          </Grid>
          <Grid item xs={7}>
            <DetailSelect
              isEdit={isEdit}
              data={languages}
              newUser={newUser}
              id="languageId"
              handleChange={handleChange}
              defaultData={defaultLanguage}
            />
          </Grid>
        </Box>
        <Box className={classes.row}>
          <Grid item xs={5}>
            <Typography variant="body1">통화설정</Typography>
          </Grid>
          <Grid item xs={7}>
            <DetailSelect
              isEdit={isEdit}
              data={currencies}
              newUser={newUser}
              id="currencyId"
              handleChange={handleChange}
              defaultData={defaultCurrency}
            />
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
