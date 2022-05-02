import React from 'react';

import { withStyles } from '@material-ui/styles';
import { withTheme } from '@material-ui/styles';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';

import CloseIcon from '@material-ui/icons/Close';

function Header(props) {
  const { classes } = props;
  return (
    <Box className={classes.rowSmall}>
      <Grid className={classes.center} item xs={11}>
        add new subscription
      </Grid>
      <Grid className={classes.center} item xs={1}>
        <CloseIcon onClick={props.handleClose} />
      </Grid>
    </Box>
  );
}

const componentStyle = withStyles(theme => ({
  rowSmall: theme.styles.Default.Box.rowSmall,
  center: theme.styles.Default.Grid.center,
}));

export default withTheme(componentStyle(Header));
