import React, { useState, useEffect } from 'react'
import styled, { ThemeProvider } from 'styled-components'
import { lightTheme, darkTheme } from '../../styles/theme'
import HeaderTitle from '../elements/HeaderTitle'

import iconMoon from '../../assets/icon-moon.svg'
import iconSun from '../../assets/icon-sun.svg'



const HeaderBackground = styled.header`
  background-image: url( ${props => props.theme.background.bgImageDesktop});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  width: 1440px;
  height: 300px;
  position: relative;
  z-index: 2;

  @media only screen and (max-width: 420px) {
    background-color: ${props => props.theme.background.bgImageMobile};
    width: 100%;
    height: 200px;
  }
`

const BackgroundWrapper = styled.div`
  background-color: ${props => props.theme.colors.secondary};
  width: 100%;
  height: 100vh;
  position: relative;
  z-index: 1;

`

const SwitchIcon = styled.img`
  width: 26px;
  height: 26px;
`


const AppBackground = () => {
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
  <div className='themeSwitch'>
    <ThemeProvider theme={theme}>
        <BackgroundWrapper>
          <HeaderBackground>
            <HeaderTitle />
            <SwitchIcon src={icon} alt="" onClick={handleClick}/>
          </HeaderBackground>
      </BackgroundWrapper>
    </ThemeProvider>
  </div>
  )
}

export { AppBackground }