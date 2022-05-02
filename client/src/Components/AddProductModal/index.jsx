import React from 'react';

import { withStyles } from '@material-ui/styles';
import { withTheme } from '@material-ui/styles';
import Box from '@material-ui/core/Box';
import Modal from '@material-ui/core/Modal';
import Header from './Header';
import Body from './Body';
import Footer from './Footer';

function AddProductModal(props) {
  const { classes } = props;
  return (
    <Modal open={props.open} onClose={() => props.handleClose()}>
      <Box
        style={{ width: '90%', margin: '5% auto', border: '1px solid black', backgroundColor: 'white', padding: 10 }}
        className={classes.root}
      >
        <Header handleClose={props.handleClose} />
        <Body />
        <Footer handleClose={props.handleClose} />
      </Box>
    </Modal>
  );
}

const componentStyle = withStyles(theme => ({
  root: theme.styles.Default.Box.root,
}));

export default withTheme(componentStyle(AddProductModal));
