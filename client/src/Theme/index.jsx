import { createTheme } from "@material-ui/core";

import { typography } from "./Typography";
import { styles } from "./Styles";

export const theme = createTheme({
  styles: styles,
  typography: typography,
});
