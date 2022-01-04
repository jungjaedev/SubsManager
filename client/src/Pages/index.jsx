import React, { Component } from 'react';


import { withStyles } from '@material-ui/styles';
import { withTheme } from '@material-ui/styles';

import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';

import SavedList from './SavedList';
import SavedFeedList from './SavedFeedList';
import UserHome from './UserHome';



class Pages extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {}

  componentDidUpdate(prevProps) {}

  shouldComponentUpdate(nextProps, nextState) {
    return true;
  }
  render() {
    const { classes } = this.props;

    return (
      <Box className={classes.overflow}>
        {/* <SavedList /> */}
        {/* <SavedFeedList /> */}
        <UserHome />
      </Box>
    );
  }
}

const componentStyle = withStyles(theme => ({
  overflow: theme.styles.Default.Box.overflow,
}));

export default withTheme(componentStyle(Pages));
