import React from 'react';

import { withStyles } from '@material-ui/styles';
import { withTheme } from '@material-ui/styles';
import Box from '@material-ui/core/Box';
import Modal from '@material-ui/core/Modal';

function AddProductModal(props) {
  const { classes } = props;
  return (
    <Box style={{ width: '90%', height: '90%', margin: '5%', backgroundColor: 'red' }} className={classes.root}>
      <Modal open={props.open} onClose={() => props.handleClose()}>
        <Box style={{ width: '90%', height: '90%', margin: '5%', backgroundColor: 'red' }} className={classes.root}></Box>
      </Modal>
    </Box>
  );
}

const componentStyle = withStyles(theme => ({
  root: theme.styles.Default.Box.root,
}));

export default withTheme(componentStyle(AddProductModal));
