import React from 'react';

import { withStyles } from '@material-ui/styles';
import { withTheme } from '@material-ui/styles';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';

function SignUp(props) {
  const { classes } = props;

  return (
    <Box className={classes.root}>
      <Box className={classes.root}>
        <Box className={classes.row}>
          <TextField id="standard-basic" label="아이디" />
        </Box>
        <Box className={classes.row}>
          <TextField id="standard-basic" label="email" />
        </Box>
        <Box className={classes.row}>
          <TextField id="standard-basic" label="password" />
        </Box>
        <Box className={classes.row}>
          <TextField id="standard-basic" label="password" />
        </Box>
        <Box className={classes.row}>
          <Grid item xs={8}></Grid>
          <Grid item xs={4}>
            <Typography variant="body1">회원가입</Typography>
          </Grid>
        </Box>
      </Box>
    </Box>
  );
}

const componentStyle = withStyles(theme => ({
  root: theme.styles.Default.Box.root,
  row: theme.styles.Default.Box.row,
}));

export default withTheme(componentStyle(SignUp));
