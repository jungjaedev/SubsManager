import React, { Component } from 'react';
import { connect } from 'react-redux';

import { withStyles } from '@material-ui/styles';
import { withTheme } from '@material-ui/styles';
import ViewListRoundedIcon from '@material-ui/icons/ViewListRounded';
import SearchRoundedIcon from '@material-ui/icons/SearchRounded';
import BookmarkBorderRoundedIcon from '@material-ui/icons/BookmarkBorderRounded';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';

const mapStateToProps = state => {
  return {};
};

class Menubar extends Component {
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
        <Grid className={classes.center} xs={4}>
          <ViewListRoundedIcon />
        </Grid>
        <Grid className={classes.center} xs={4}>
          <SearchRoundedIcon />
        </Grid>
        <Grid className={classes.center} xs={4}>
          <BookmarkBorderRoundedIcon />
        </Grid>
      </Box>
    );
  }
}

const componentStyle = withStyles(theme => ({
  root: theme.styles.Default.Box.root,
  center: theme.styles.Default.Box.centerCenter,
}));

export default connect(mapStateToProps)(withTheme(componentStyle(Menubar)));
