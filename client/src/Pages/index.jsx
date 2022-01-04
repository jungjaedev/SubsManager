import React from 'react';

import { withStyles } from '@material-ui/styles';
import { withTheme } from '@material-ui/styles';

import Box from '@material-ui/core/Box';

// import SavedList from './SavedList';
// import SavedFeedList from './SavedFeedList';
import UserHome from './UserHome';

function Pages(props) {
  const { classes } = props;

  return (
    <Box className={classes.overflow}>
      {/* <SavedList /> */}
      {/* <SavedFeedList /> */}
      <UserHome />
    </Box>
  );
}

const componentStyle = withStyles(theme => ({
  overflow: theme.styles.Default.Box.overflow,
}));

export default withTheme(componentStyle(Pages));
