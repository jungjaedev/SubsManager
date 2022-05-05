import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { withStyles } from '@material-ui/styles';
import { withTheme } from '@material-ui/styles';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';

import { productInfo, updateUserProductInfoAction } from 'Data/userProduct';

function Product(props) {
  const { classes } = props;
  const dispatch = useDispatch();
  const userProduct = useSelector(productInfo);

  let disabled = false;

  if (userProduct.product.hasOwnProperty('url')) {
    disabled = true;
  }

  const handleChange = e => {
    const newUserProduct = { ...userProduct };
    const newData = { name: e.target.value };
    newUserProduct[props.name] = newData;
    dispatch(updateUserProductInfoAction(newUserProduct));
  };

  let value = !userProduct.product.name ? '' : userProduct.product.name;

  return (
    <Box className={classes.row}>
      <Grid item xs={3}>
        {props.displayName}
      </Grid>
      <Grid item xs={9}>
        <TextField disabled={disabled} value={value} onChange={e => handleChange(e)} />
      </Grid>
    </Box>
  );
}

const componentStyle = withStyles(theme => ({
  row: theme.styles.Default.Box.row,
}));

export default withTheme(componentStyle(Product));
