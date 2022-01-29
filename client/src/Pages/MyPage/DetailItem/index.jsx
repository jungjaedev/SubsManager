import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { withStyles } from '@material-ui/styles';
import { withTheme } from '@material-ui/styles';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import { userInfo, updateNewUserInfoAction, updateEditModeAction, resetNewUserInfoAction, newUserInfo, editMode } from '../../../Data/user';

function DetailItem(props) {
  const { classes } = props;
  const [isEdit, setIsEdit] = useState(false);
  const user = useSelector(userInfo);
  const isEditMode = useSelector(editMode);
  const newUser = useSelector(newUserInfo);
  const dispatch = useDispatch();

  const handleCancel = () => {
    dispatch(resetNewUserInfoAction());
    dispatch(updateEditModeAction(''));
    setIsEdit(!isEdit);
    console.log('handleCancel!');
  };

  const handleSave = () => {
    /* 
    Todo : post콜 성공후 isEdit 바꿔주기~~~~~
    dispatch();
    */
    dispatch(updateEditModeAction(''));
    setIsEdit(!isEdit);
    console.log('save!');
  };

  const handleClick = () => {
    dispatch(updateEditModeAction(props.label));
    if (isEdit) {
      console.log('save~~!');
    }
    setIsEdit(!isEdit);
  };

  const disabled = isEditMode === '' ? false : true;

  const edit = isEdit ? (
    <Box className={classes.row}>
      <Grid item xs={6}>
        <Button onClick={() => handleCancel()}>
          <Typography variant="body1">취소</Typography>
        </Button>
      </Grid>
      <Grid item xs={6}>
        <Button onClick={() => handleSave()}>
          <Typography variant="body1">저장</Typography>
        </Button>
      </Grid>
    </Box>
  ) : (
    <Box className={classes.row}>
      <Grid item xs={6}></Grid>
      <Grid item xs={6}>
        <Button disabled={disabled} onClick={() => handleClick()}>
          <Typography variant="body1">수정</Typography>
        </Button>
      </Grid>
    </Box>
  );

  const value = isEdit ? (
    <TextField defaultValue={newUser[props.label]} id="standard-basic" />
  ) : (
    <Typography variant="body1">{user[props.label]}</Typography>
  );

  return (
    <Box className={classes.row}>
      <Grid item xs={4}>
        <Typography variant="body1">{props.label}</Typography>
      </Grid>
      <Grid item xs={4}>
        {value}
      </Grid>
      <Grid item xs={3}>
        {edit}
      </Grid>
    </Box>
  );
}

const componentStyle = withStyles(theme => ({
  row: theme.styles.Default.Box.row,
}));

export default withTheme(componentStyle(DetailItem));
