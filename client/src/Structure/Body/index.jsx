import React, { Component } from 'react';


import { withStyles } from '@material-ui/styles';
import { withTheme } from '@material-ui/styles';

import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';

import Pages from '../../Pages';



class Body extends Component {
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
      <Box className={classes.body} pl={3} pr={3}>
        <Pages />
      </Box>
    );
  }
}

const componentStyle = withStyles(theme => ({
  body: theme.styles.Default.Structure.body,
}));

export default withTheme(componentStyle(Body));
