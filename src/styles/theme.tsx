import { DefaultTheme } from 'styled-components'
import '../main.css'

const lightTheme: DefaultTheme ={
  background: {
    primary: 'hsl(220, 98%, 61%)',
    pradient: 'linear-gradient(to right, hsl(192, 100%, 67%), hsl(280, 87%, 65%));',
  },
  colors: {
    primary: 'hsl(0, 0%, 98%)',
    secondary: 'hsl(236, 33%, 92%)',
    accentLight: 'hsl(233, 11%, 84%)',
    accentDark: 'hsl(236, 9%, 61%)',
    accentVeryDark: 'hsl(235, 19%, 35%)',
  },
  spacing: {

  },
  typography: {
    fontSize: {
      standar: '18px',
    },
    fontFamily: "'Josefin Sans', sans-serif;'",
    fontWeight: {
      regular: 400,
      bold: 700,
  }
}}

const darkTheme: DefaultTheme = {
  background: {
    bgPrimary: 'hsl(220, 98%, 61%)',
    bgGradient: 'linear-gradient(to right, hsl(192, 100%, 67%), hsl(280, 87%, 65%));',
  },
  colors: {
    primary: 'hsl(235, 21%, 11%)',
    secondary: 'hsl(235, 24%, 19%)',
    lightGrayishBlue: 'hsl(234, 39%, 85%)',
    lightGrayishBlueHoover: 'hsl(236, 33%, 92%)',
    darkGrayishBlue: 'hsl(234, 11%, 52%)',
    veryDarkGrayishBlue: 'hsl(233, 14%, 35%)',
    veryDarkGrayishBlueHoover: 'hsl(237, 14%, 26%)',
  },
  spacing: {
    
  },
  typography: {
    fontSize: {
      standar: '18px',
    },
    fontFamily: "'Josefin Sans', sans-serif;'",
    fontWeight: {
      regular: 400,
      bold: 700,
  }
}}


export { lightTheme, darkTheme };