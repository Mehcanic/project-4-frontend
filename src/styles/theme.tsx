import { DefaultTheme } from 'styled-components'
import '../main.css'

import bgDesktopLight from '../assets/bg-desktop-light.jpg';
import bgDesktopDark from '../assets/bg-desktop-dark.jpg';
import bgMobileLight from '../assets/bg-mobile-light.jpg';
import bgMobileDark from '../assets/bg-mobile-dark.jpg';

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
    bgImageDesktop: bgDesktopLight,
    bgImageMobile: bgMobileLight,
  },
  colors: {
    primary: 'hsl(0, 0%, 98%)',
    secondary: 'hsl(236, 33%, 92%)',
    // accentLight: 'hsl(233, 11%, 84%)',
    fontColor: 'hsl(235, 19%, 35%)',
    accentDark: 'hsl(236, 9%, 61%)',
    accentVeryDark: 'hsl(235, 19%, 35%)',
    accentDarkHover: 'hsl(233, 14%, 35%)',
    accentVeryDarkHover: 'hsl(237, 14%, 26%)',
  },
  spacing: {

  },
  typography: {
    fontSize: {
      small: '14px',
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
    primary: 'hsl(220, 98%, 61%)',
    gradient: 'linear-gradient(to right, hsl(192, 100%, 67%), hsl(280, 87%, 65%));',
    bgImageDesktop: bgDesktopDark,
    bgImageMobile: bgMobileDark,
  },
  colors: {
    primary: 'hsl(235, 21%, 11%)',
    secondary: 'hsl(235, 24%, 19%)',
    fontColor: 'hsl(234, 39%, 85%)',
    accentDark: 'hsl(236, 33%, 92%)',
    accentVeryDark: 'hsl(234, 11%, 52%)',
    accentDarkHover: 'hsl(233, 14%, 35%)',
    accentVeryDarkHover: 'hsl(237, 14%, 26%)',
  },
  spacing: {
    
  },
  typography: {
    fontSize: {
      small: '14px',
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