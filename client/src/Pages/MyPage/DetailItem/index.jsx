import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { withStyles } from '@material-ui/styles';
import { withTheme } from '@material-ui/styles';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';
import FormControl from '@material-ui/core/FormControl';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';

import { userInfo, updateUserFuction, updateEditModeAction, resetNewUserInfoAction, newUserInfo, editMode } from '../../../Data/user';

function DetailItem(props) {
  const { classes } = props;
  const [isEdit, setIsEdit] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
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
    dispatch(updateUserFuction());
  };

  useEffect(() => {
    if (isEdit === true && isEditMode === '') {
      setIsEdit(!isEdit);
    }
  }, [isEdit, isEditMode]);

  const handleEdit = () => {
    dispatch(updateEditModeAction(props.label));
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
        <Button disabled={disabled} onClick={() => handleEdit()}>
          <Typography variant="body1">수정</Typography>
        </Button>
      </Grid>
    </Box>
  );

  const newUserValue = newUser && newUser[props.label] ? newUser[props.label] : '';

  const userValue = user && user[props.label] ? user[props.label] : '';

  const handleMouseDownPassword = event => {
    event.preventDefault();
  };

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };
  const passwordValue = newUser.password ? newUser.password : '';

  const value = isEdit ? (
    props.label === 'password' ? (
      <FormControl>
        <Input
          id="standard-adornment-password"
          type={showPassword ? 'text' : 'password'}
          value={passwordValue}
          onChange={e => props.handleChange(props.label, e)}
          endAdornment={
            <InputAdornment position="end">
              <IconButton aria-label="toggle password visibility" onClick={handleClickShowPassword} onMouseDown={handleMouseDownPassword}>
                {showPassword ? <Visibility /> : <VisibilityOff />}
              </IconButton>
            </InputAdornment>
          }
        />
      </FormControl>
    ) : (
      <TextField onChange={e => props.handleChange(props.label, e)} defaultValue={newUserValue} id="standard-basic" />
    )
  ) : props.label === 'password' ? (
    <Typography variant="body1">'**********'</Typography>
  ) : (
    <Typography variant="body1">{userValue}</Typography>
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
