import React from 'react';

import { withStyles } from '@material-ui/styles';
import { withTheme } from '@material-ui/styles';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import NativeSelect from '@material-ui/core/NativeSelect';

function DetailSelect(props) {
  const { classes } = props;
  const options = props.data.map((item, idx) => {
    return (
      <option key={idx} value={item.id}>
        {item.display_name}
      </option>
    );
  });

  const select = props.isEdit ? (
    <FormControl className={classes.formControl}>
      <NativeSelect value={props.newUser[props.id]} onChange={e => props.handleChange(props.newUser[props.id], e)}>
        {options}
      </NativeSelect>
    </FormControl>
  ) : (
    <Typography variant="body1">{props.defaultData.display_name}</Typography>
  );
  return <Box className={classes.row}>{select}</Box>;
}

const componentStyle = withStyles(theme => ({
  row: theme.styles.Default.Box.row,
}));

export default withTheme(componentStyle(DetailSelect));
