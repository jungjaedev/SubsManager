import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { withStyles } from '@material-ui/styles';
import { withTheme } from '@material-ui/styles';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import FormControl from '@material-ui/core/FormControl';
import NativeSelect from '@material-ui/core/NativeSelect';

import { productInfo, updateUserProductInfoAction } from 'Data/userProduct';

function Dropdown(props) {
  const { classes } = props;
  const dispatch = useDispatch();
  const userProduct = useSelector(productInfo);

  let value = '';
  if (props.name === 'Category' && Object.keys(userProduct.product).length !== 0) {
    let selectedCategory = props.data.find(el => el.id === userProduct.product.categoryId);
    value = selectedCategory.id;
    if (typeof selectedCategory === 'string') {
      value = '';
    }
  }

  const handleChange = e => {
    let selected = e.target.value;
    const newUserProduct = { ...userProduct };
    let newData = props.data.find(el => el.id === parseInt(selected));
    newUserProduct[props.name] = newData;
    dispatch(updateUserProductInfoAction(newUserProduct));
    value = e.target.value;
  };
  const options = props.data.map((item, idx) => {
    return (
      <option key={idx} value={item.id}>
        {item.display_name}
      </option>
    );
  });

  return (
    <Box className={classes.row}>
      <Grid item xs={3}>
        {props.displayName}
      </Grid>
      <Grid item xs={9}>
        <FormControl className={classes.formControl}>
          <NativeSelect onChange={e => handleChange(e)} value={value}>
            <option value=""></option>
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

export default withTheme(componentStyle(Dropdown));
