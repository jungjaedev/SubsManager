import { palette } from '../Palette';
import { ColorThemes } from '../ColorThemes';

export const typography = {
  fontFamily: [
   //   '-apple-system',
   //  'BlinkMacSystemFont',
   //  '"Segoe UI"',
     'Helvetica Neue',
     'Arial',
     'Roboto',
     'sans-serif',
     'Apple Color Emoji',
     'Segoe UI Emoji',
     'Segoe UI Symbol',
   ],

  fontSize: 11,

  h1: {/*used for (modal) headers white*/
    color: ColorThemes.white,
    fontWeight: 'bold',
    fontSize: '1rem',
    lineHeight: '1.1rem',
  },

  h2: {/*used for normal lettertype dark*/
    color: ColorThemes.darkgrey,
    fontWeight: 'normal',
    fontSize: '1rem',
    lineHeight: '1.1rem',
  },

  h3: {/*used for normal lettertype white*/
    color: ColorThemes.white,
    fontWeight: 'normal',
    fontSize: '1rem',
    lineHeight: '1.1rem',
  },

  h4: {/*used for small lettertype white*/
    color: ColorThemes.white,
    fontWeight: 'normal',
    fontSize: '0.7rem',
  },

  h5: {/*used for small lettertype dark*/
    color: ColorThemes.darkgrey,
    fontWeight: 'normal',
    fontSize: '0.7rem',
  },

  h6: {/*used for headers dark*/
    color: ColorThemes.darkgrey,
    fontWeight: 'bold',
    fontSize: '1rem',
    lineHeight: '1.1rem',
  },

  body1: {/*used for longer texts lettertype dark*/
    color: ColorThemes.darkgrey,
    fontWeight: 'normal',
    fontSize: '1rem',
    lineHeight: '1.4rem',
  },

  body2: {/*used for longer texts lettertype white*/
    color: ColorThemes.white,
    fontWeight: 'normal',
    fontSize: '1rem',
    lineHeight: '1.4rem',
  },

  button: {
    textTransform: 'none',
    fontSize: '1rem',
    fontWeight: 'normal',
  },

  caption: {
    color: ColorThemes.midgrey,
    fontSize: '0,7rem',
    letterSpacing: '0.3px',
    fontWeight: 'normal'
  },

  subtitle1:{
    color: ColorThemes.blue,
    fontSize: '0,8rem',
    letterSpacing: '0.3px',
    fontWeight: 'normal'
  },

  subtitle2:{
    color: ColorThemes.midgrey,
    fontSize: '0,6rem',
    letterSpacing: '0.3px',
    fontWeight: 'normal'
  },

  MenuItem: {
    selected: {
      color: palette.primary.main,
    },
    '&:hover': {
      color: palette.primary.main,
    },
  },

//  caption: {
//    color: ColorThemes.kentivo,
//    fontWeight: 'bold',
//    fontSize: '1rem',
//    lineHeight: '1.4rem',
//  }
};
