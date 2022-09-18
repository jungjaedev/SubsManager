import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { withStyles } from '@material-ui/styles';
import { withTheme } from '@material-ui/styles';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';

import ProductItem from './ProductItem';

import { getAllFunction, product } from 'Data/manager';

function ProductList(props) {
  const { classes } = props;
  const dispatch = useDispatch();

  const productList = useSelector(state => state.manager.productFiltered);


  useEffect(() => {
    dispatch(getAllFunction('product'));
  }, [dispatch]);

  const list = Object.values(productList)
    .filter(item => item.url.length)
    .map((item, index) => {
      return (
        <Grid key={index} className={classes.root} style={{ padding: 4 }} item xs={6}>
          <ProductItem handleOpenAddModal={props.handleOpenAddModal} data={item} />
        </Grid>
      );
    });
  return <Box className={classes.root}>{list}</Box>;
}

const componentStyle = withStyles(theme => ({
  root: theme.styles.Default.Box.root,
}));

export default withTheme(componentStyle(ProductList));
