import { DefaultTheme } from 'styled-components'
import '../main.css'

import bgDesktopLight from '../assets/bg-desktop-light.jpg'
import bgDesktopDark from '../assets/bg-desktop-dark.jpg'
import bgMobileLight from '../assets/bg-mobile-light.jpg'
import bgMobileDark from '../assets/bg-mobile-dark.jpg'

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
    primary: '#3a7bfd',
    gradient: 'linear-gradient(to right, hsl(192, 100%, 67%), hsl(280, 87%, 65%));',
    bgImageDesktop: bgDesktopLight,
    bgImageMobile: bgMobileLight,
  },
  colors: {
    primary: '#fafafa',
    secondary: '#e4e5f1',
    accentLight: '#d2d3db',
    accentDark: '#9394a5',
    accentVeryDark: '#484b6a',
  },
  spacing: {

  },
  typography: {
    fontSize: {
      standard: '18px',
      header: '100px',
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
    primary: '#3a7bfd',
    gradient: 'linear-gradient(to right, hsl(192, 100%, 67%), hsl(280, 87%, 65%));',
    bgImageDesktop: bgDesktopDark,
    bgImageMobile: bgMobileDark,
  },
  colors: {
    primary: '#161722',
    secondary: '#25273c',
    accentLight: '#cacde8',
    accentDark: '#777a92',
    accentVeryDark: '#4d5066',
    accentDarkHover: '#e4e5f1',
    accentVeryDarkHover: '#393a4c',
  },
  spacing: {
    
  },
  typography: {
    fontSize: {
      standard: '18px',
      header: '40px',
    },
    fontFamily: "'Josefin Sans', sans-serif;",
    fontWeight: {
      regular: 400,
      bold: 700,
  }
}}


export { lightTheme, darkTheme };