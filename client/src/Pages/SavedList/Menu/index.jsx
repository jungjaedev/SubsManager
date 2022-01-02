import React, { Component } from 'react';
import { connect } from 'react-redux';

import { withStyles } from '@material-ui/styles';
import { withTheme } from '@material-ui/styles';
import Button from '@material-ui/core/Button';

import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';

const mapStateToProps = state => {
  return {};
};

class Menu extends Component {
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
        <Grid className={classes.rowLarge} item xs={6}>
          <Box className={classes.centerCenter}>
            <Button>해시태그</Button>
          </Box>
        </Grid>
        <Grid className={classes.rowLarge} item xs={6}>
          <Box className={classes.centerCenter}>
            <Button>사람</Button>
          </Box>
        </Grid>
      </Box>
    );
  }
}

const componentStyle = withStyles(theme => ({
  root: theme.styles.Default.Box.root,
  rowLarge: theme.styles.Default.Box.rowLarge,
  centerCenter: theme.styles.Default.Box.centerCenter,
}));

export default connect(mapStateToProps)(withTheme(componentStyle(Menu)));
