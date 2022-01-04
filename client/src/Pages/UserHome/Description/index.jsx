import React, { Component } from 'react';


import { withStyles } from '@material-ui/styles';
import { withTheme } from '@material-ui/styles';

import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';



class Description extends Component {
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
        <Box className={classes.rowSmall}>
          <Typography variant="body1">이름</Typography>
        </Box>
        <Box className={classes.root}>
          <Typography variant="body2">Descriptions</Typography>
        </Box>
      </Box>
    );
  }
}

const componentStyle = withStyles(theme => ({
  root: theme.styles.Default.Box.root,
  rowSmall: theme.styles.Default.Box.rowSmall,
}));

export default withTheme(componentStyle(Description));
