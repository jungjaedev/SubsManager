import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { withStyles } from '@material-ui/styles';
import { withTheme } from '@material-ui/styles';
import Box from '@material-ui/core/Box';

import Overview from './Overview';
import QuickAdd from './QuickAdd';

import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';

import AddProductModal from '../../Components/AddProductModal';

import { updateModalIsOpenAction, modalIsOpen } from 'Data/userProduct';

function Main(props) {
  const { classes } = props;
  const dispatch = useDispatch();
  const isOpen = useSelector(modalIsOpen);

  const handleOpenAddModal = () => {
    dispatch(updateModalIsOpenAction(true));
  };

  return (
    <Box style={{ position: 'relative' }} className={classes.root}>
      <Overview />
      <QuickAdd handleOpenAddModal={handleOpenAddModal} />
      <Fab className={classes.floatingBtn} onClick={() => handleOpenAddModal()} color="primary" aria-label="add">
        <AddIcon />
      </Fab>
      <AddProductModal open={isOpen} />
    </Box>
  );
}

const componentStyle = withStyles(theme => ({
  root: theme.styles.Default.Box.root,
  floatingBtn: theme.styles.Default.Button.floatingBtn,
}));

export default withTheme(componentStyle(Main));
