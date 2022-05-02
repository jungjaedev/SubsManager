import React from 'react';

import { withStyles } from '@material-ui/styles';
import { withTheme } from '@material-ui/styles';
import Box from '@material-ui/core/Box';
import ServiceName from './ServiceName';
// import TextInput from 'Components/Form/TextInput';
import TextInput from '../../Form/TextInput';

function Body(props) {
  const { classes } = props;
  return (
    <Box className={classes.root}>
      <TextInput name='name' value='asdfasdf' />
      <TextInput name='type'></TextInput>
      <ServiceName />
    </Box>
  );
}

const componentStyle = withStyles(theme => ({
  root: theme.styles.Default.Box.root,
}));

export default withTheme(componentStyle(Body));
