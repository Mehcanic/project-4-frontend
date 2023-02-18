import React, { useState } from 'react'
import styled, { ThemeProvider } from 'styled-components'
import iconMoon from '../images/icon-check.svg'
import iconSun from '../images/icon-sun.svg'
import { lightTheme, darkTheme } from '../../styles/theme'



const ThemeSwitch = () => {
  const [theme, setTheme] = useState(darkTheme)

  if (theme.id === 'dark') {
    setTheme({
      ...theme,
      ...lightTheme,
    })
  } else {
    setTheme({
      ...theme,
      ...darkTheme,
    })
  }
}

export { ThemeSwitch }