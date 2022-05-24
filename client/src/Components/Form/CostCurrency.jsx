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
    let newData = props.data.find(el => el.code === 'KRW');
    let obj = { key: props.name, value: newData };
    dispatch(updateUserProductInfoAction(obj));
  }, []);

  const options = props.data.map((item, idx) => {
    return (
      <option key={idx} value={item.id}>
        {`${item.code} - ${item.display_name}`}
      </option>
    );
  });

  const handleChangeCost = (e, name) => {
    const newData = e.target.value;
    let obj = { key: name, value: newData };
    dispatch(updateUserProductInfoAction(obj));
  };

  const handleChangeCurrency = (e, name) => {
    let selected = e.target.value;
    let newData = props.data.find(el => el.id === parseInt(selected));
    let obj = { key: name, value: newData };
    dispatch(updateUserProductInfoAction(obj));
  };

  let costValue = userProduct.cost;
  let currencyValue = userProduct.currency.id;

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
