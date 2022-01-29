import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { withStyles } from '@material-ui/styles';
import { withTheme } from '@material-ui/styles';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import NativeSelect from '@material-ui/core/NativeSelect';
import Button from '@material-ui/core/Button';

import {
  userInfo,
  updateNewUserInfoAction,
  updateEditModeAction,
  resetNewUserInfoAction,
  newUserInfo,
  editMode,
  updateUserFuction,
} from '../../../Data/user';

function DetailSelect(props) {
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
    dispatch(updateUserFuction()).then(() => {
      dispatch(updateEditModeAction(''));
      setIsEdit(!isEdit);
      return console.log('save!');
    });
    /* 
    Todo : post콜 ';'성공'후 isEdit 바꿔주기~~~~~
    */
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

  const options = props.data.map((item, idx) => {
    return (
      <option key={idx} value={item.id}>
        {item.display_name}
      </option>
    );
  });

  const select = isEdit ? (
    <FormControl className={classes.formControl}>
      <NativeSelect value={newUser[props.id]} onChange={e => props.handleChange(props.id, e)}>
        {options}
      </NativeSelect>
    </FormControl>
  ) : (
    <Typography variant="body1">{props.defaultData.display_name}</Typography>
  );
  return (
    <Box className={classes.row}>
      <Grid item xs={4}>
        <Typography variant="body1">{props.label}</Typography>
      </Grid>
      <Grid item xs={4}>
        {select}
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

export default withTheme(componentStyle(DetailSelect));
