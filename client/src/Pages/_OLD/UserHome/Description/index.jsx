import React from "react";

import { withStyles } from "@material-ui/styles";
import { withTheme } from "@material-ui/styles";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";

function Description(props) {
  const { classes } = props;
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

const componentStyle = withStyles((theme) => ({
  root: theme.styles.Default.Box.root,
  rowSmall: theme.styles.Default.Box.rowSmall,
}));

export default withTheme(componentStyle(Description));
