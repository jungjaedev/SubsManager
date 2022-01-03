import React, { Component } from 'react';
import { connect } from 'react-redux';

import { withStyles } from '@material-ui/styles';
import { withTheme } from '@material-ui/styles';

import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';

const mapStateToProps = state => {
  return {};
};

class Story extends Component {
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
    const dummyData = {
      1: {
        pk: 1,
        id: 1,
        user_name: 'instagram',
        post_count: 43234,
        type: 'hashtag',
        description: 'Hi! I am instagram!',
      },
      2: {
        pk: 2,
        id: 2,
        user_name: 'rotterdam',
        post_count: 233443,
        type: 'hashtag',
        description: '',
      },
      3: {
        pk: 3,
        id: 3,
        user_name: 'instagram',
        post_count: 3333,
        type: 'user',
        description: 'Hi! I am instagram!',
      },
      4: {
        pk: 4,
        id: 4,
        user_name: 'ronaldo',
        post_count: 234,
        type: 'user',
        description: 'Hi! I am instagram!',
      },
      5: {
        pk: 5,
        id: 5,
        user_name: 'snow',
        post_count: 3447745,
        type: 'hashtag',
        description: '',
      },
      6: {
        pk: 6,
        id: 46,
        user_name: 'facebook',
        post_count: 231,
        type: 'user',
        description: 'Hi! I am facebook!',
      },
      7: {
        pk: 7,
        id: 7,
        user_name: 'rotterdam',
        post_count: 233443,
        type: 'hashtag',
        description: '',
      },
      8: {
        pk: 8,
        id: 8,
        user_name: 'instagram',
        post_count: 3333,
        type: 'user',
        description: 'Hi! I am instagram!',
      },
      9: {
        pk: 9,
        id: 9,
        user_name: 'ronaldo',
        post_count: 234,
        type: 'user',
        description: 'Hi! I am instagram!',
      },
      10: {
        pk: 10,
        id: 10,
        user_name: 'snow',
        post_count: 3447745,
        type: 'hashtag',
        description: '',
      },
      11: {
        pk: 5,
        id: 5,
        user_name: 'snow',
        post_count: 3447745,
        type: 'hashtag',
        description: '',
      },
      12: {
        pk: 6,
        id: 46,
        user_name: 'facebook',
        post_count: 231,
        type: 'user',
        description: 'Hi! I am facebook!',
      },
      13: {
        pk: 7,
        id: 7,
        user_name: 'rotterdam',
        post_count: 233443,
        type: 'hashtag',
        description: '',
      },
      14: {
        pk: 8,
        id: 8,
        user_name: 'instagram',
        post_count: 3333,
        type: 'user',
        description: 'Hi! I am instagram!',
      },
      15: {
        pk: 9,
        id: 9,
        user_name: 'ronaldo',
        post_count: 234,
        type: 'user',
        description: 'Hi! I am instagram!',
      },
      16: {
        pk: 10,
        id: 10,
        user_name: 'snow',
        post_count: 3447745,
        type: 'hashtag',
        description: '',
      },
      17: {
        pk: 10,
        id: 10,
        user_name: 'snow',
        post_count: 3447745,
        type: 'hashtag',
        description: '',
      },
      18: {
        pk: 10,
        id: 10,
        user_name: 'snow',
        post_count: 3447745,
        type: 'hashtag',
        description: '',
      },
      19: {
        pk: 8,
        id: 8,
        user_name: 'instagram',
        post_count: 3333,
        type: 'user',
        description: 'Hi! I am instagram!',
      },
      20: {
        pk: 9,
        id: 9,
        user_name: 'ronaldo',
        post_count: 234,
        type: 'user',
        description: 'Hi! I am instagram!',
      },
      21: {
        pk: 10,
        id: 10,
        user_name: 'snow',
        post_count: 3447745,
        type: 'hashtag',
        description: '',
      },
      22: {
        pk: 10,
        id: 10,
        user_name: 'snow',
        post_count: 3447745,
        type: 'hashtag',
        description: '',
      },
      23: {
        pk: 10,
        id: 10,
        user_name: 'snow',
        post_count: 3447745,
        type: 'hashtag',
        description: '',
      },
    };
    const lists = Object.values(dummyData).map((item, idx) => {
      return (
        <Box className={classes.box} key={idx} data={item}>
          사진
        </Box>
      );
    });
    return (
      <Box className={classes.root}>
        <Box className={classes.new}>{lists}</Box>
      </Box>
    );
  }
}

const componentStyle = withStyles(theme => ({
  root: theme.styles.Default.Box.root,
  overflowX: theme.styles.Default.Box.overflowX,
  row: theme.styles.Default.Box.row,
  box: { width: '30', height: '100%', border: '1px solid black' },
  new: { display: 'flex', height: '50px', width: '100vw', overflowX: 'scroll', marginRight: 30, zIndex: 100 },
}));

export default connect(mapStateToProps)(withTheme(componentStyle(Story)));