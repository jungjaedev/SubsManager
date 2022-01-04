import React from 'react';

import { withStyles } from '@material-ui/styles';
import { withTheme } from '@material-ui/styles';

import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';

import PhotoList from '../../Components/PhotoList';

function SavedFeedList(props) {
  const { classes } = props;

  return (
    <Box className={classes.root}>
      <Grid className={classes.rowLarge}>저장한 게시물 110</Grid>
      <PhotoList />
    </Box>
  );
}

const componentStyle = withStyles(theme => ({
  root: theme.styles.Default.Box.root,
  rowLarge: theme.styles.Default.Box.rowLarge,
}));

export default withTheme(componentStyle(SavedFeedList));
