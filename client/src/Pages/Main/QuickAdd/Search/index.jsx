import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { withStyles } from "@material-ui/styles";
import { withTheme } from "@material-ui/styles";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import ClearIcon from '@material-ui/icons/Clear';
import InputAdornment from '@material-ui/core/InputAdornment';

import { searchFunction } from 'Data/manager'

function Search(props) {
  const { classes } = props;
  const dispatch = useDispatch()
  const productSearchValue = useSelector(state => state.manager.productSearchValue)
  const handleChange = (event) => {
    dispatch(searchFunction('product', event.target.value))
  }
  const handleClear = () => {
    dispatch(searchFunction('product', ''))
  }

  return (
    <Box className={classes.root} mb={2}>
      <Grid item xs={12} className={classes.row}>
        <TextField className={classes.textField}
          placeholder='Find a subscription product'
          value={productSearchValue}
          onChange={(event) => handleChange(event)}
          InputProps={{
            startAdornment: <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>,
            endAdornment: <InputAdornment position="end">
              <IconButton
                onClick={() => handleClear()}
              >
                <ClearIcon />
              </IconButton>
            </InputAdornment>,
          }}>
        </TextField>
      </Grid>
    </Box>
  );
}

const componentStyle = withStyles((theme) => ({
  row: theme.styles.Default.Box.row,
  root: theme.styles.Default.Box.root,
  textField: theme.styles.Default.TextField.root,
}));

export default withTheme(componentStyle(Search));
