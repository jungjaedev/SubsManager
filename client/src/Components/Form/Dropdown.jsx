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
  let disabled = false;
  if (props.name === 'category') {
    // 존재하는 프로덕트를 추가하는 경우. 이미 카테고리가 정해져 있으므로, 그 카테고리의 value를 set.
    if (userProduct.product.hasOwnProperty('url')) {
      let selectedCategory = props.data.find(el => el.id === userProduct.product.categoryId);
      value = selectedCategory.id;
      disabled = true;
    } else {
      disabled = false;
      value = userProduct.hasOwnProperty('category') ? userProduct.category.id : '';
    }
  }

  if (props.name === 'type') {
    value = userProduct.type.id;
  }

  const handleChange = e => {
    let selected = e.target.value;
    let newData = props.data.find(el => el.id === parseInt(selected));
    let obj = { key: props.name, value: newData };
    dispatch(updateUserProductInfoAction(obj));
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
        <FormControl className={classes.formControl} disabled={disabled}>
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
