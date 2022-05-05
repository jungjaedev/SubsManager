import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { withStyles } from '@material-ui/styles';
import { withTheme } from '@material-ui/styles';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import FormControl from '@material-ui/core/FormControl';
import NativeSelect from '@material-ui/core/NativeSelect';

import { productInfo, updateUserProductInfoAction } from 'Data/userProduct';

function AutoRenew(props) {
  const { classes } = props;
  const dispatch = useDispatch();
  const userProduct = useSelector(productInfo);

  useEffect(() => {
    let newData = props.data.find(el => el.id === 1);
    let obj = { key: props.name, value: newData };
    dispatch(updateUserProductInfoAction(obj));
  }, []);
  const options = props.data.map((item, idx) => {
    return (
      <option key={idx} value={item.id}>
        {item.display_name}
      </option>
    );
  });

  const handleChange = e => {
    let selected = e.target.value;
    let newData = props.data.find(el => el.id === parseInt(selected));
    let obj = { key: props.name, value: newData };
    dispatch(updateUserProductInfoAction(obj));
  };

  let value = userProduct[props.name].id;

  return (
    <Box className={classes.row}>
      <Grid item xs={4}>
        Auto Renew
      </Grid>
      <Grid item xs={8}>
        <FormControl className={classes.formControl}>
          <NativeSelect onChange={e => handleChange(e)} value={value}>
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

export default withTheme(componentStyle(AutoRenew));
