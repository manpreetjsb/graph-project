import { createMuiTheme } from '@material-ui/core/styles'

import {
  primary,
  primaryDark,
  primaryLight,
  secondary,
  secondaryDark,
  //secondaryContrastText,
  secondaryLight,
  white,
  /*   black,
  lightGrey,
  lighterGrey,
  clearGrey,
  darkerOrange, */
} from './colors'
import {
  FontFamily,
  htmlFontSize,
  h1,
  h3,
  h2,
  h4,
  h5,
  h6,
  body1,
  body2,
  small,
  bold,
} from './fonts'

export const theme = createMuiTheme({
  overrides: {
    MuiCssBaseline: {
      '@global': {
        html: {
          WebkitFontSmoothing: 'auto',
        },
        ul: {
          margin: 0,
          padding: 0,
        },
      },
    },
  },
  palette: {
    primary: {
      light: primaryLight,
      main: primary,
      dark: primaryDark,
      contrastText: white,
    },
    secondary: {
      light: secondaryLight,
      main: secondary,
      dark: secondaryDark,
      contrastText: white,
    },
    background: {
      default: white,
    },
  },
  typography: {
    htmlFontSize: htmlFontSize,
    fontFamily: FontFamily,
    h1: {
      fontSize: h1,
    },
    h2: {
      fontSize: h2,
    },
    h3: {
      fontSize: h3,
    },
    h4: {
      fontSize: h4,
    },
    h5: {
      fontSize: h5,
    },
    h6: {
      fontSize: h6,
    },
    body1: {
      fontSize: body1,
    },
    body2: {
      fontSize: body2,
    },
    subtitle2: {
      fontSize: small,
    },
    button: {
      fontSize: body1,
      fontWeight: bold,
      textTransform: 'none',
    },
  },
  props: {
    MuiButton: {
      disableElevation: true,
    },
  },
})
