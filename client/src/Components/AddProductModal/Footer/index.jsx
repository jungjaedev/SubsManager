import React from 'react';

import { withStyles } from '@material-ui/styles';
import { withTheme } from '@material-ui/styles';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

function Footer(props) {
  const { classes } = props;
  return (
    <Box className={classes.root}>
      <Grid className={classes.center} item xs={6}>
        <Button variant="outlined">Save</Button>
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
