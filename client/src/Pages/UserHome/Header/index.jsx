import React, { Component } from 'react';
import { connect } from 'react-redux';

import { withStyles } from '@material-ui/styles';
import { withTheme } from '@material-ui/styles';

import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';

const mapStateToProps = state => {
  return {};
};

class Header extends Component {
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
      <Box className={classes.rowBig}>
        <Grid container direction="row">
          <Grid item xs={3}>
            사진
          </Grid>
          <Grid item xs={6}>
            아이디
          </Grid>
          <Grid item xs={3}>
            peeking
          </Grid>
        </Grid>
      </Box>
    );
  }
}

const componentStyle = withStyles(theme => ({
  rowBig: theme.styles.Default.Box.rowBig,
}));

export default connect(mapStateToProps)(withTheme(componentStyle(Header)));
