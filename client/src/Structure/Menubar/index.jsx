import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { withStyles } from '@material-ui/styles';
import { withTheme } from '@material-ui/styles';
import EditRoundedIcon from '@material-ui/icons/EditRounded';
import ListAltRoundedIcon from '@material-ui/icons/ListAltRounded';
import BarChartRoundedIcon from '@material-ui/icons/BarChartRounded';
import IconButton from '@material-ui/core/IconButton';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
//Reducer
import { updateMenuAction } from '../../Data/manager';

function Menubar(props) {
  const { classes } = props;
  const dispatch = useDispatch();

  const [isCurrent, setIsCurrent] = useState('');

  const handleList = menu => {
    dispatch(updateMenuAction(menu));
    setIsCurrent(menu);
  };

  const checkCurrent = menu => {
    if (menu === isCurrent) return 'secondary';
    return 'primary';
  };

  return (
    <Box className={classes.footer}>
      <Grid className={classes.center} item xs={4}>
        <IconButton color={checkCurrent('thisMonth')} onClick={() => handleList('thisMonth')}>
          <ListAltRoundedIcon />
        </IconButton>
      </Grid>
      <Grid className={classes.center} item xs={4}>
        <IconButton color={checkCurrent('statistics')} onClick={() => handleList('statistics')}>
          <BarChartRoundedIcon />
        </IconButton>
      </Grid>
      <Grid className={classes.center} item xs={4}>
        <IconButton color={checkCurrent('manage')} onClick={() => handleList('manage')}>
          <EditRoundedIcon />
        </IconButton>
      </Grid>
    </Box>
  );
}

const componentStyle = withStyles(theme => ({
  root: theme.styles.Default.Box.root,
  center: theme.styles.Default.Box.centerCenter,
  footer: theme.styles.Default.Structure.footer,
}));

export default withTheme(componentStyle(Menubar));
