import React from 'react';

import { withStyles } from '@material-ui/styles';
import { withTheme } from '@material-ui/styles';
import Box from '@material-ui/core/Box';

import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';

function ProductItem(props) {
  const { classes } = props;
  // display_name: "Tmon"
  // name: "tmon"
  // url: "https://www.tmon.co.kr/"

  const handleVisitWebsite = () => {
    window.open(props.data.url);
  };

  const handleOpenAddModal = () => {
    console.log('modal open');
  };

  return (
    <Box className={classes.root}>
      <Box onClick={() => handleVisitWebsite()}>{props.data.display_name}</Box>
      <Box>
        <AddCircleOutlineIcon onClick={() => handleOpenAddModal()} />
      </Box>
    </Box>
  );
}

const componentStyle = withStyles(theme => ({
  root: theme.styles.Default.Box.root,
}));

export default withTheme(componentStyle(ProductItem));
