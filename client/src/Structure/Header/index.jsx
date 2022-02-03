import React from 'react';
import { useDispatch } from 'react-redux';

import { withStyles } from '@material-ui/styles';
import { withTheme } from '@material-ui/styles';
import PermIdentityRoundedIcon from '@material-ui/icons/PermIdentityRounded';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';

import { updateMenuAction } from '../../Data/manager';

function Header(props) {
  const { classes } = props;

  const dispatch = useDispatch();

  const handleClick = menu => {
    dispatch(updateMenuAction(menu));
  };

  return (
    <Box className={classes.header}>
      <Grid item xs={2}></Grid>
      <Grid item xs={8} className={classes.centerCenter}>
        <Button onClick={() => handleClick('main')}>
          <Typography variant="h5" className={classes.textTransform}>
            SubsManager
          </Typography>
        </Button>
      </Grid>
      <Grid item xs={2}>
        <IconButton onClick={() => handleClick('myPage')}>
          <PermIdentityRoundedIcon />
        </IconButton>
      </Grid>
    </Box>
  );
}

const componentStyle = withStyles(theme => ({
  root: theme.styles.Default.Box.root,
  centerCenter: theme.styles.Default.Box.centerCenter,
  header: theme.styles.Default.Structure.header,
  textTransform: { textTransform: 'none' },
}));

export default withTheme(componentStyle(Header));
