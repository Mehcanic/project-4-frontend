import React, { useState, useEffect } from 'react'
import styled, { ThemeProvider } from 'styled-components'
import iconMoon from '../../assets/icon-moon.svg'
import iconSun from '../../assets/icon-sun.svg'
import { lightTheme, darkTheme } from '../../styles/theme'

const ThemeSwitchButton = styled.button`
  width: 26px;
  height: 26px;
  border: 1px solid black;
`

const ThemeSwitch = () => {
  const [theme, setTheme] = useState(darkTheme)
  const [icon, setIcon] = useState(iconMoon)
  

  
  const handleClick = () => {
      if (theme.id === 'dark') {
        setTheme({...theme, ...lightTheme})
        setIcon(iconSun)
      } else {
        setTheme({...theme, ...darkTheme})
        setIcon(iconMoon)
      }
    }

  return (
  <>
    <img src={icon} alt="" onClick={handleClick}/>
  </>
  )
}

export { ThemeSwitch }