import React, { Component } from 'react';


import { withStyles } from '@material-ui/styles';
import { withTheme } from '@material-ui/styles';

import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';

import PhotoList from '../../Components/PhotoList';



class SavedFeedList extends Component {
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
        <Grid className={classes.rowLarge}>저장한 게시물 110</Grid>
        <PhotoList />
      </Box>
    );
  }
}

const componentStyle = withStyles(theme => ({
  root: theme.styles.Default.Box.root,
  rowLarge: theme.styles.Default.Box.rowLarge,
}));

export default withTheme(componentStyle(SavedFeedList));
