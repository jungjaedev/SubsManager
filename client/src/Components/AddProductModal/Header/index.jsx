import React from 'react';
import { useDispatch } from 'react-redux';

import { withStyles } from '@material-ui/styles';
import { withTheme } from '@material-ui/styles';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';

import CloseIcon from '@material-ui/icons/Close';

import { updateModalIsOpenAction } from 'Data/userProduct';

function Header(props) {
  const { classes } = props;
  const dispatch = useDispatch();
  const handleClose = () => {
    dispatch(updateModalIsOpenAction(false));
  };
  return (
    <Box className={classes.rowSmall}>
      <Grid className={classes.center} item xs={11}>
        add new subscription
      </Grid>
      <Grid className={classes.center} item xs={1}>
        <CloseIcon onClick={() => handleClose()} />
      </Grid>
    </Box>
  );
}

const componentStyle = withStyles(theme => ({
  rowSmall: theme.styles.Default.Box.rowSmall,
  center: theme.styles.Default.Grid.center,
}));

export default withTheme(componentStyle(Header));
