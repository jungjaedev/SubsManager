import React, { Component } from 'react';


import { withStyles } from '@material-ui/styles';
import { withTheme } from '@material-ui/styles';

import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';

import HashList from './HashList';
import Menu from './Menu';
import UserList from './UserList';



class SavedList extends Component {
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
      <Box className={classes.root}>
        <Box className={classes.root}>
          <Menu />
        </Box>
        <Box className={classes.root}>
          <HashList />
        </Box>
      </Box>
    );
  }
}

const componentStyle = withStyles(theme => ({
  root: theme.styles.Default.Box.root,
}));

export default withTheme(componentStyle(SavedList));
