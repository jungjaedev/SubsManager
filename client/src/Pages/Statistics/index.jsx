import React from 'react';

import { withStyles } from '@material-ui/styles';
import { withTheme } from '@material-ui/styles';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import MonthlyTotal from './MonthlyTotal';
import Category from './Category';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

function Statistics(props) {
  const { classes } = props;
  let age = '';

  return (
    <Box className={classes.root}>
      <Box className={classes.root}>
        <Grid container className={classes.rowLarge}>
          <Grid item xs={3}>
            <Typography>기간 선택</Typography>
          </Grid>
          <Grid item xs={3}>
            <FormControl variant="outlined" className={classes.formControl}>
              <InputLabel id="demo-simple-select-outlined-label">Age</InputLabel>
              <Select
                labelId="demo-simple-select-outlined-label"
                id="demo-simple-select-outlined"
                value={age}
                onChange={() => console.log('selectBox')}
                label="Age"
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
          </Grid>
        </Grid>
      </Box>
      <Box className={classes.root}>
        <Grid className={classes.row}>
          <Typography>Total service subscriptions fee (previous 12month) </Typography>
        </Grid>
        <Category />
      </Box>
      <Box className={classes.root}>
        <Grid className={classes.row}>
          <Typography>Monthly totals (previous 12month)</Typography>
        </Grid>
        <MonthlyTotal />
      </Box>
    </Box>
  );
}

const componentStyle = withStyles(theme => ({
  root: theme.styles.Default.Box.root,
  rowLarge: theme.styles.Default.Box.rowLarge,
  row: theme.styles.Default.Box.row,
}));

export default withTheme(componentStyle(Statistics));
