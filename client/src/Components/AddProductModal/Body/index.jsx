import React from 'react';
import { useSelector } from 'react-redux';

import { withStyles } from '@material-ui/styles';
import { withTheme } from '@material-ui/styles';
import Box from '@material-ui/core/Box';
// import Product from '../../Form/Product';
import Product from 'Components/Form/Product';
import Dropdown from '../../Form/Dropdown';
import BillingCycle from '../../Form/BillingCycle';
import CostCurrency from '../../Form/CostCurrency';
import Calendar from '../../Form/Calendar';
import AutoRenew from '../../Form/AutoRenew';

function Body(props) {
  const { classes } = props;
  const typeList = useSelector(state => state.manager.type);
  const categoryList = useSelector(state => state.manager.category);
  const currencyList = useSelector(state => state.manager.currency);
  const periodList = useSelector(state => state.manager.period);
  const autoRenewList = useSelector(state => state.manager.autoRenew);
  const productList = useSelector(state => state.manager.product);

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
