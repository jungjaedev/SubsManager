import React from 'react';

import { withStyles } from '@material-ui/styles';
import { withTheme } from '@material-ui/styles';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Search from './Search';
import ProductList from './ProductList';

function QuickAdd(props) {
  const { classes } = props;

  return (
    <Box className={classes.root} pt={4}>
      <Grid item xs={12} className={classes.row}>
        <Typography variant="h6">Quick add subscription</Typography>
      </Grid>
      <Search />
      <ProductList handleOpenAddModal={props.handleOpenAddModal} />
    </Box>
  );
}

const componentStyle = withStyles(theme => ({
  root: theme.styles.Default.Box.root,
  row: theme.styles.Default.Box.row,
}));

export default withTheme(componentStyle(QuickAdd));
