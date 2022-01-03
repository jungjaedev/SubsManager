import React, { Component } from 'react';
import { connect, useSelector, useDispatch } from 'react-redux';

import { withStyles } from '@material-ui/styles';
import { withTheme } from '@material-ui/styles';
import { selectMenu } from '../../Data/Manager';
import ViewListRoundedIcon from '@material-ui/icons/ViewListRounded';
import SearchRoundedIcon from '@material-ui/icons/SearchRounded';
import BookmarkBorderRoundedIcon from '@material-ui/icons/BookmarkBorderRounded';
import IconButton from '@material-ui/core/IconButton';
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

  handleList = menu => {
    console.log(menu);
    const dispatch = useDispatch();
    dispatch(selectMenu(menu));
  };

  componentDidMount() {}

  componentDidUpdate(prevProps) {}

  shouldComponentUpdate(nextProps, nextState) {
    return true;
  }
  render() {
    const { classes } = this.props;

    return (
      <Box className={classes.footer}>
        <Grid className={classes.center} item xs={4}>
          <IconButton color="secondary" onClick={() => this.handleList('savedList')}>
            <ViewListRoundedIcon />
          </IconButton>
        </Grid>
        <Grid className={classes.center} item xs={4}>
          <IconButton>
            <SearchRoundedIcon />
          </IconButton>
        </Grid>
        <Grid className={classes.center} item xs={4}>
          <IconButton>
            <BookmarkBorderRoundedIcon />
          </IconButton>
        </Grid>
      </Box>
    );
  }
}

const componentStyle = withStyles(theme => ({
  root: theme.styles.Default.Box.root,
  center: theme.styles.Default.Box.centerCenter,
  footer: theme.styles.Default.Structure.footer,
}));

export default connect(mapStateToProps)(withTheme(componentStyle(Menubar)));
