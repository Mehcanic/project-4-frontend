import React, { useState } from 'react'

import { StyleSheetManager, ThemeProvider, DefaultTheme } from 'styled-components'
import { darkTheme, lightTheme } from './styles/theme'
import { HeaderContainer, AppContainer } from './App.style'

import AppBackground from './components/blocks/AppBackground'
import ListOfTasks from './components/blocks/ListOfTasks'
import ThemeIcon from './components/elements/ThemeIcon'
import HeaderTitle from './components/elements/HeaderTitle'

import iconMoon from './assets/icon-moon.svg'
import iconSun from './assets/icon-sun.svg'
import { ThemeProps, Task } from './types'

const App = () => {
  const [theme, setTheme] = useState(darkTheme)
  const [icon, setIcon] = useState(iconMoon)
  const [tasks, setTasks] = useState<Task[]>([])

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
          <AppContainer>
            <HeaderContainer>
              <HeaderTitle />
              <ThemeIcon icon={icon}  onClick={handleClick} />
            </HeaderContainer>
            <div className='createTask-container'>

            </div>
            <div className='list-container'>
              <ListOfTasks theme={theme} tasks={tasks} />
            </div>
          </AppContainer>
        </ThemeProvider>
      </div>
    </StyleSheetManager>
  )
}

export default App
