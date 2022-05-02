import React from 'react';

import { withStyles } from '@material-ui/styles';
import { withTheme } from '@material-ui/styles';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import FormControl from '@material-ui/core/FormControl';
import NativeSelect from '@material-ui/core/NativeSelect';
import TextField from '@material-ui/core/TextField';

function CostCurrency(props) {
  const { classes } = props;
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
        {props.name}
      </Grid>
      <Grid item xs={4}>
        <TextField />
      </Grid>
      <Grid item xs={1}></Grid>
      <Grid item xs={4}>
        <FormControl className={classes.formControl}>
          <NativeSelect value={props.data.id}>{options}</NativeSelect>
        </FormControl>
      </Grid>
    </Box>
  );
}

const componentStyle = withStyles(theme => ({
  row: theme.styles.Default.Box.row,
}));

export default withTheme(componentStyle(CostCurrency));
