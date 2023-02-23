import React, { useState } from 'react'

import { StyleSheetManager, ThemeProvider, DefaultTheme } from 'styled-components'
import { darkTheme, lightTheme } from './styles/theme'

import AppBackground from './components/blocks/AppBackground'
import ListOfTasks from './components/blocks/ListOfTasks'
import ThemeIcon from './components/elements/ThemeIcon'
import HeaderTitle from './components/elements/HeaderTitle'
import iconMoon from './assets/icon-moon.svg'
import iconSun from './assets/icon-sun.svg'

const App = () => {
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
    <StyleSheetManager disableVendorPrefixes>
      <div className='application'>
        <ThemeProvider theme={theme}>
          <AppBackground />
          <HeaderTitle />
          <ThemeIcon icon={icon}  onClick={handleClick} />
          <ListOfTasks theme={theme}  />
        </ThemeProvider>
      </div>
    </StyleSheetManager>
  )
}

export default App
