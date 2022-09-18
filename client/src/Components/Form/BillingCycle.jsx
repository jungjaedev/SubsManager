import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { withStyles } from '@material-ui/styles';
import { withTheme } from '@material-ui/styles';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import FormControl from '@material-ui/core/FormControl';
import NativeSelect from '@material-ui/core/NativeSelect';
import { updateUserProductInfoAction, productInfo } from 'Data/userProduct';

function BillingCycle(props) {
  const { classes } = props;
  const dispatch = useDispatch();
  const userProduct = useSelector(productInfo);

  useEffect(() => {
    const newUserProduct = { ...userProduct };
    if (props.data.length && !Object.keys(newUserProduct.period).length) {
      let newData = props.data.find(item => item.name === 'month');
      let obj = { key: props.name, value: newData };
      dispatch(updateUserProductInfoAction(obj));
    }
  }, []);
  const options = props.data.map((item, idx) => {
    return (
      <option key={idx} value={item.id}>
        {item.display_name}
      </option>
    );
  });
  const days = [];
  for (let i = 0; i < 31; i++) {
    days.push(
      <option key={i + 1} value={i + 1}>
        {i + 1}
      </option>
    );
  }
  let periodValue = Object.keys(userProduct.period).length ? userProduct.period.id : '';

  const handleChangePeriod = (e, name) => {
    let selected = e.target.value;
    let newData = props.data.find(el => el.id === parseInt(selected));
    let obj = { key: name, value: newData };
    dispatch(updateUserProductInfoAction(obj));
  };

  const handleChangeCycle = (e, name) => {
    let selected = e.target.value;
    let obj = { key: props.name, value: selected };
    dispatch(updateUserProductInfoAction(obj));
  };

  return (
    <Box className={classes.row}>
      <Grid item xs={6}>
        Billingcycle : every
      </Grid>
      <Grid item xs={3}>
        <FormControl className={classes.formControl}>
          <NativeSelect onChange={e => handleChangeCycle(e, 'billing_cycle')}>{days}</NativeSelect>
        </FormControl>
      </Grid>
      <Grid item xs={3}>
        <FormControl className={classes.formControl}>
          <NativeSelect onChange={e => handleChangePeriod(e, 'period')} value={periodValue}>
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

export default withTheme(componentStyle(BillingCycle));
