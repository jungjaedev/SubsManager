import React, { useState } from 'react';

import { withStyles } from '@material-ui/styles';
import { withTheme } from '@material-ui/styles';
import Box from '@material-ui/core/Box';
import Modal from '@material-ui/core/Modal';

import Overview from './Overview';
import QuickAdd from './QuickAdd';

import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';

import AddProductModal from '../../Components/AddProductModal';

function Main(props) {
  const { classes } = props;
  const [open, setOpen] = useState(false);

  const handleOpenAddModal = () => {
    console.log('add');
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box style={{ position: 'relative' }} className={classes.root}>
      <Overview />
      <QuickAdd handleOpenAddModal={handleOpenAddModal} />
      <Fab className={classes.floatingBtn} onClick={() => handleOpenAddModal()} color="primary" aria-label="add">
        <AddIcon />
      </Fab>
      <AddProductModal open={open} handleClose={handleClose} />
    </Box>
  );
}

const componentStyle = withStyles(theme => ({
  root: theme.styles.Default.Box.root,
  floatingBtn: theme.styles.Default.Button.floatingBtn,
}));

export default withTheme(componentStyle(Main));
