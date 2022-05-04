import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { withStyles } from '@material-ui/styles';
import { withTheme } from '@material-ui/styles';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import FormControl from '@material-ui/core/FormControl';
import NativeSelect from '@material-ui/core/NativeSelect';
import TextField from '@material-ui/core/TextField';

import { productInfo, updateUserProductInfoAction } from 'Data/userProduct';

function CostCurrency(props) {
  const { classes } = props;
  const dispatch = useDispatch();
  const userProduct = useSelector(productInfo);

  useEffect(() => {
    const newUserProduct = { ...userProduct };
    let newData = props.data.find(el => el.code === 'KRW');
    newUserProduct['currency'] = newData;
    dispatch(updateUserProductInfoAction(newUserProduct));
  }, []);

  const options = props.data.map((item, idx) => {
    return (
      <option key={idx} value={item.id}>
        {`${item.code} - ${item.display_name}`}
      </option>
    );
  });

  const handleChangeCost = (e, name) => {
    const newUserProduct = { ...userProduct };
    const newData = e.target.value;
    newUserProduct[name] = newData;
    dispatch(updateUserProductInfoAction(newUserProduct));
  };

  const handleChangeCurrency = (e, name) => {
    let selected = e.target.value;
    const newUserProduct = { ...userProduct };
    let newData = props.data.find(el => el.id === parseInt(selected));
    newUserProduct[name] = newData;
    dispatch(updateUserProductInfoAction(newUserProduct));
  };

  let costValue = userProduct.cost;
  let currencyValue = userProduct.hasOwnProperty('code') ? userProduct.currency.id : props.data.find(el => el.code === 'KRW').id;

  return (
    <Box className={classes.row}>
      <Grid item xs={3}>
        Cost
      </Grid>
      <Grid item xs={4}>
        <TextField value={costValue} onChange={e => handleChangeCost(e, 'cost')} />
      </Grid>
      <Grid item xs={1}></Grid>
      <Grid item xs={4}>
        <FormControl className={classes.formControl}>
          <NativeSelect onChange={e => handleChangeCurrency(e, 'currency')} value={currencyValue}>
            {options}
          </NativeSelect>
        </FormControl>
      </Grid>
    </Box>
  );
}

const componentStyle = withStyles(theme => ({
  row: theme.styles.Default.Box.row,
}));

export default withTheme(componentStyle(CostCurrency));
