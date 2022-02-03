import React from 'react';

import { withStyles } from '@material-ui/styles';
import { withTheme } from '@material-ui/styles';
import Box from '@material-ui/core/Box';

import Pages from '../../Pages';

function Body(props) {
  const { classes } = props;
  return (
    <Box className={`${classes.body} ${classes.overflow}`} pl={3} pr={3}>
      <Pages />
    </Box>
  );
}

const componentStyle = withStyles(theme => ({
  body: theme.styles.Default.Structure.body,
  overflow: { overflowY: 'auto' },
}));

export default withTheme(componentStyle(Body));
