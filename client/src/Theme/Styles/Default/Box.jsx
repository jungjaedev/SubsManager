import { ColorThemes } from '../../ColorThemes';

export const Box = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    width: '100%',
    height: 'auto',
  },

  rootHeight100: {
    display: 'flex',
    flexWrap: 'wrap',
    width: '100%',
    height: '100%',
  },

  centerCenter: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexWrap: 'wrap',
    textAlign: 'center',
    marginLeft: 'auto',
    marginRight: 'auto',
  },

  centerRight: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    flexWrap: 'wrap',
    textAlign: 'right',
  },

  spaceBetween: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  selected: {
    display: 'flex',
    flexWrap: 'wrap',
    width: '100%',
    height: 'auto',
    backgroundColor: ColorThemes.blueLight,
  },

  //HEADERS

  header: {
    display: 'flex',
    height: 50,
    alignItems: 'center',
    width: '100%',
    background: ColorThemes.blueGradient,
  },

  // ROWS
  row: {
    display: 'flex',
    height: 40,
    alignItems: 'center',
    width: '100%',
  },

  rowSmall: {
    display: 'flex',
    width: '100%',
    height: 24,
    alignItems: 'center',
  },

  rowLarge: {
    display: 'flex',
    width: '100%',
    height: 56,
    alignItems: 'center',
  },

  rowBig: {
    display: 'flex',
    width: '100%',
    height: 122,
    alignItems: 'center',
  },

  //OVERFLOWS

  overflow: {
    height: '100%',
    width: '100%',
    overflowY: 'auto',
    overflowX: 'hidden',
    '&::-webkit-scrollbar': {
      display: 'none',
    },
  },

  overflowX: {
    height: '100%',
    width: '100%',
    overflowY: 'hidden',
    overflowX: 'auto',
    '&::-webkit-scrollbar': {
      display: 'none',
    },
  },
};
