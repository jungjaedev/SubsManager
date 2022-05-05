import React from 'react';
import { useDispatch } from 'react-redux';

import { withStyles } from '@material-ui/styles';
import { withTheme } from '@material-ui/styles';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

import { updateUserFuction } from 'Data/userProduct';

function Footer(props) {
  const { classes } = props;
  const dispatch = useDispatch();

  const handleSave = () => {
    dispatch(updateUserFuction());
  };

  return (
    <Box className={classes.root}>
      <Grid className={classes.center} item xs={6}>
        <Button onClick={() => handleSave()} variant="outlined">
          Save
        </Button>
      </Grid>
      <Grid className={classes.center} item xs={6}>
        <Button onClick={props.handleClose} variant="outlined">
          Cancel
        </Button>
      </Grid>
    </Box>
  );
}

const componentStyle = withStyles(theme => ({
  root: theme.styles.Default.Box.root,
  center: theme.styles.Default.Grid.center,
}));

export default withTheme(componentStyle(Footer));
