import React from "react";

import { withStyles } from "@material-ui/styles";
import { withTheme } from "@material-ui/styles";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

function Header(props) {
  const { classes } = props;
  return (
    <Box className={classes.rowBig}>
      <Grid container direction="row">
        <Grid item xs={3}>
          사진
        </Grid>
        <Grid item xs={6}>
          <Typography variant="h6">아이디</Typography>
        </Grid>
        <Grid item xs={3}>
          <Typography variant="button">peeking</Typography>
        </Grid>
      </Grid>
    </Box>
  );
}

const componentStyle = withStyles((theme) => ({
  rowBig: theme.styles.Default.Box.rowBig,
}));

export default withTheme(componentStyle(Header));
