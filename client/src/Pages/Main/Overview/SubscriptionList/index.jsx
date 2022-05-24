import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { withStyles } from '@material-ui/styles';
import { withTheme } from '@material-ui/styles';
import Box from '@material-ui/core/Box';

import SubscriptionItem from './SubscriptionItem';

import { getUserProductFuction, userProductList } from 'Data/userProduct';

function SubscriptionList(props) {
  const { classes } = props;
  const dispatch = useDispatch();
  const productList = useSelector(userProductList);
  useEffect(() => {
    dispatch(getUserProductFuction());
  }, []);

  const list = productList.map((item, idx) => {
    return <SubscriptionItem key={idx} data={item} />;
  });
  return <Box className={classes.root}>{list}</Box>;
}

const componentStyle = withStyles(theme => ({
  root: theme.styles.Default.Box.root,
}));

export default withTheme(componentStyle(SubscriptionList));
