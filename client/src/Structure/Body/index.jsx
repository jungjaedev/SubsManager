import React, { Component } from "react";
import { connect } from "react-redux";

import { withStyles } from "@material-ui/styles";
import { withTheme } from "@material-ui/styles";

import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";

const mapStateToProps = (state) => {
  return {};
};

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
    const dummyData = {
      1: {
        pk: 1,
        id: 1,
        user_name: "instagram",
        post_count: 43234,
        type: "hashtag",
        description: "Hi! I am instagram!",
      },
      2: {
        pk: 2,
        id: 2,
        user_name: "rotterdam",
        post_count: 233443,
        type: "hashtag",
        description: "",
      },
      3: {
        pk: 3,
        id: 3,
        user_name: "instagram",
        post_count: 3333,
        type: "user",
        description: "Hi! I am instagram!",
      },
      4: {
        pk: 4,
        id: 4,
        user_name: "ronaldo",
        post_count: 234,
        type: "user",
        description: "Hi! I am instagram!",
      },
      5: {
        pk: 5,
        id: 5,
        user_name: "snow",
        post_count: 3447745,
        type: "hashtag",
        description: "",
      },
      6: {
        pk: 6,
        id: 46,
        user_name: "facebook",
        post_count: 231,
        type: "user",
        description: "Hi! I am facebook!",
      },
      7: {
        pk: 7,
        id: 7,
        user_name: "rotterdam",
        post_count: 233443,
        type: "hashtag",
        description: "",
      },
      8: {
        pk: 8,
        id: 8,
        user_name: "instagram",
        post_count: 3333,
        type: "user",
        description: "Hi! I am instagram!",
      },
      9: {
        pk: 9,
        id: 9,
        user_name: "ronaldo",
        post_count: 234,
        type: "user",
        description: "Hi! I am instagram!",
      },
      10: {
        pk: 10,
        id: 10,
        user_name: "snow",
        post_count: 3447745,
        type: "hashtag",
        description: "",
      },
    };
    const lists = Object.values(dummyData).map((item) => {
      return (
        <Grid container item>
          <Grid container item direction="row">
            <Grid container item xs={10}>
              <Grid item xs={2}>
                #
              </Grid>
              <Grid item xs={10} direction="column">
                <Grid>#{item.user_name}</Grid>
                <Grid>게시물 {item.post_count}만</Grid>
              </Grid>
            </Grid>
            <Grid item xs={2}>
              x
            </Grid>
          </Grid>
        </Grid>
      );
    });
    return (
      <Box className={classes.root}>
        <Grid container direction="column" spacing={2}>
          <Grid item>peeking list 50</Grid>
          <Grid container item direction="column">
            {lists}
          </Grid>
        </Grid>
      </Box>
    );
  }
}

const componentStyle = withStyles((theme) => ({
  root: theme.styles.Default.Box.root,
}));

export default connect(mapStateToProps)(withTheme(componentStyle(Body)));
