import React from 'react';
import { useSelector } from 'react-redux';

import { withStyles } from '@material-ui/styles';
import { withTheme } from '@material-ui/styles';
import Box from '@material-ui/core/Box';
// import TextInput from 'Components/Form/TextInput';
import TextInput from '../../Form/TextInput';
import Dropdown from '../../Form/Dropdown';
import BillingCycle from '../../Form/BillingCycle';
import CostCurrency from '../../Form/CostCurrency';

import { type, category, currency, autoRenew, period } from '../../../Data/manager';

function Body(props) {
  const { classes } = props;
  const typeList = useSelector(type);
  const categoryList = useSelector(category);
  const currencyList = useSelector(currency);
  const periodList = useSelector(period);

  return (
    <Box className={classes.root}>
      <TextInput name="Name" />
      <Dropdown data={typeList} name="Type"></Dropdown>
      <Dropdown data={categoryList} name="Category"></Dropdown>
      <BillingCycle data={periodList} name="Period"></BillingCycle>
      <CostCurrency data={currencyList} name="Currency"></CostCurrency>
    </Box>
  );
}

const componentStyle = withStyles(theme => ({
  root: theme.styles.Default.Box.root,
}));

export default withTheme(componentStyle(Body));
