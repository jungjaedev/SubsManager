import React from 'react';

import { withStyles } from '@material-ui/styles';
import { withTheme } from '@material-ui/styles';
import IconButton from '@material-ui/core/IconButton';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import HighlightOffRoundedIcon from '@material-ui/icons/HighlightOffRounded';

function SearchListItem(props) {
  const { classes } = props;

  return (
    <Box className={classes.rowLarge}>
      <Grid container item>
        <Grid container item direction="row">
          <Grid container item xs={10}>
            <Grid item xs={2}>
              #
            </Grid>
            <Grid container item xs={10} direction="column">
              <Grid>
                <Typography variant="body1">#{props.data.user_name}</Typography>
              </Grid>
              <Grid>
                <Typography variant="body2">게시물 {props.data.post_count}만</Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={2}>
            <IconButton aria-label="delete">
              <HighlightOffRoundedIcon />
            </IconButton>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}

const componentStyle = withStyles(theme => ({
  root: theme.styles.Default.Box.root,
  rowLarge: theme.styles.Default.Box.rowLarge,
}));

export default withTheme(componentStyle(SearchListItem));
