import React from 'react';

import { withStyles } from '@material-ui/styles';
import { withTheme } from '@material-ui/styles';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';

function Menu(props) {
  const { classes } = props;

  return (
    <Box className={classes.root}>
      <Grid className={classes.rowLarge} item xs={6}>
        <Box className={classes.centerCenter}>
          <Button>
            <Typography variant="body1">해시태그</Typography>
          </Button>
        </Box>
      </Grid>
      <Grid className={classes.rowLarge} item xs={6}>
        <Box className={classes.centerCenter}>
          <Button>
            <Typography variant="body1">사람</Typography>
          </Button>
        </Box>
      </Grid>
    </Box>
  );
}

const componentStyle = withStyles(theme => ({
  root: theme.styles.Default.Box.root,
  rowLarge: theme.styles.Default.Box.rowLarge,
  centerCenter: theme.styles.Default.Box.centerCenter,
}));

export default withTheme(componentStyle(Menu));
