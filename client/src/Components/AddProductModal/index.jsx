import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { withStyles } from '@material-ui/styles';
import { withTheme } from '@material-ui/styles';
import Box from '@material-ui/core/Box';
import Modal from '@material-ui/core/Modal';
import Header from './Header';
import Body from './Body';
import Footer from './Footer';

import { getAllFunction, type, category, currency, period, product } from '../../Data/manager';
import { modalIsOpen, updateModalIsOpenAction } from 'Data/userProduct';

function AddProductModal(props) {
  const { classes } = props;
  const dispatch = useDispatch();
  const isOpen = useSelector(modalIsOpen);
  const typeList = useSelector(type);
  const currencyList = useSelector(currency);
  const categoryList = useSelector(category);
  const periodList = useSelector(period);
  const productList = useSelector(product);

  useEffect(() => {
    if (!typeList.length) {
      dispatch(getAllFunction('type'));
    }
    if (!categoryList.length) {
      dispatch(getAllFunction('category'));
    }
    if (!currencyList.length) {
      dispatch(getAllFunction('currency'));
    }
    if (!periodList.length) {
      dispatch(getAllFunction('period'));
    }
    if (!productList.length) {
      dispatch(getAllFunction('product'));
    }
  }, [dispatch]);

  const handleClose = () => {
    dispatch(updateModalIsOpenAction(false));
  };

  return (
    <Modal open={isOpen} onClose={() => handleClose()}>
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
