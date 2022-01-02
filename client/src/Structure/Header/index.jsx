import React, { Component } from 'react';
import { connect } from 'react-redux';

import { withStyles } from '@material-ui/styles';
import { withTheme } from '@material-ui/styles';
import PermIdentityRoundedIcon from '@material-ui/icons/PermIdentityRounded';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';

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
      <Box className={classes.header}>
        <Grid item xs={3}></Grid>
        <Grid item xs={6} className={classes.centerCenter}>
          <Button>SNEAK PEEK</Button>
        </Grid>
        <Grid item xs={3}>
          <IconButton>
            <PermIdentityRoundedIcon />
          </IconButton>
        </Grid>
      </Box>
    );
  }
}

const componentStyle = withStyles(theme => ({
  root: theme.styles.Default.Box.root,
  centerCenter: theme.styles.Default.Box.centerCenter,
  header: theme.styles.Default.Structure.header,
}));

export default connect(mapStateToProps)(withTheme(componentStyle(Header)));
