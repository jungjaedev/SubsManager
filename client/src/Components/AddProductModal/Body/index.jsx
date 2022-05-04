import React from 'react';
import { useSelector } from 'react-redux';

import { withStyles } from '@material-ui/styles';
import { withTheme } from '@material-ui/styles';
import Box from '@material-ui/core/Box';
// import Product from 'Components/Form/Product';
import Product from '../../Form/Product';
import Dropdown from '../../Form/Dropdown';
import BillingCycle from '../../Form/BillingCycle';
import CostCurrency from '../../Form/CostCurrency';
import Calendar from '../../Form/Calendar';
import AutoRenew from '../../Form/AutoRenew';

import { type, category, currency, autoRenew, period, product } from '../../../Data/manager';

function Body(props) {
  const { classes } = props;
  const typeList = useSelector(type);
  const categoryList = useSelector(category);
  const currencyList = useSelector(currency);
  const periodList = useSelector(period);
  const autoRenewList = useSelector(autoRenew);
  const productList = useSelector(product);

  return (
    <Box className={classes.root}>
      <Product data={productList} name="product" displayName="Product" />
      <Dropdown data={typeList} name="type" displayName="Type"></Dropdown>
      <Calendar name="start_date" displayName="Start Date" />
      {/* <Calendar name="End Date" /> */}
      <BillingCycle data={periodList} name="period" displayName="Period"></BillingCycle>
      <Dropdown data={categoryList} name="category" displayName="Category"></Dropdown>
      <CostCurrency data={currencyList} name="currency" displayName="Currency"></CostCurrency>
      <AutoRenew data={autoRenewList} name="auto_renew" displayName="AutoRenew" />
    </Box>
  );
}

const componentStyle = withStyles(theme => ({
  root: theme.styles.Default.Box.root,
}));

export default withTheme(componentStyle(Body));
