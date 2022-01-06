import React from "react";

import { withStyles } from "@material-ui/styles";
import { withTheme } from "@material-ui/styles";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import PhotoList from "../../../Components/PhotoList";
import Typography from "@material-ui/core/Typography";

function Statistics(props) {
  const { classes } = props;

  return (
    <Box className={classes.root}>
      <Box className={classes.rowLarge}>
        <Grid className={`${classes.box} ${classes.centerCenter}`} item xs={4}>
          <Typography variant="body1">게시물</Typography>
        </Grid>
        <Grid className={`${classes.box} ${classes.centerCenter}`} item xs={4}>
          <Typography variant="body1">팔로워</Typography>
        </Grid>
        <Grid className={`${classes.box} ${classes.centerCenter}`} item xs={4}>
          <Typography variant="body1">팔로우</Typography>
        </Grid>
      </Box>
      <PhotoList />
    </Box>
  );
}

const componentStyle = withStyles((theme) => ({
  rowLarge: theme.styles.Default.Box.rowLarge,
  root: theme.styles.Default.Box.root,
  centerCenter: theme.styles.Default.Box.centerCenter,
  box: { border: "1px solid black", height: 56 },
}));

export default withTheme(componentStyle(Statistics));
