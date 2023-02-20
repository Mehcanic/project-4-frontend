import { DefaultTheme } from 'styled-components'
import '../main.css'

interface Theme {
  id: 'light' | 'dark';
  background: {
    [key: string]: string;
  };
  colors: {
    [key: string]: string;
}
  spacing: {
    [key: string]: string;
  };
  typography: {
    fontSize: {
      [key: string]: string;
    };
    fontFamily: string;
    fontWeight: {
      [key: string]: number;
    };
  };
}

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}

const lightTheme: DefaultTheme = {
  id: 'light',
  background: {
    primary: 'hsl(220, 98%, 61%)',
    gradient: 'linear-gradient(to right, hsl(192, 100%, 67%), hsl(280, 87%, 65%));',
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
      standard: '18px',
    },
    fontFamily: "'Josefin Sans', sans-serif;'",
    fontWeight: {
      regular: 400,
      bold: 700,
  }
}}

const darkTheme: DefaultTheme = {
  id: 'dark',
  background: {
    primary: 'hsl(220, 98%, 61%)',
    gradient: 'linear-gradient(to right, hsl(192, 100%, 67%), hsl(280, 87%, 65%));',
  },
  colors: {
    primary: 'hsl(235, 21%, 11%)',
    secondary: 'hsl(235, 24%, 19%)',
    accentLight: 'hsl(234, 39%, 85%)',
    accentDark: 'hsl(234, 11%, 52%)',
    accentVeryDark: 'hsl(233, 14%, 35%)',
    accentDarkHover: 'hsl(236, 33%, 92%)',
    accentVeryDarkHover: 'hsl(237, 14%, 26%)',
  },
  spacing: {
    
  },
  typography: {
    fontSize: {
      standard: '18px',
    },
    fontFamily: "'Josefin Sans', sans-serif;",
    fontWeight: {
      regular: 400,
      bold: 700,
  }
}}


export { lightTheme, darkTheme };