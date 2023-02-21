import styled from 'styled-components'

const HeaderBackground = styled.header`
  background-image: url( ${props => props.theme.background.bgImageDesktop});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  width: 1440px;
  height: 300px;
  position: relative;
  z-index: -4;

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
  z-index: -5;
`


const AppBackground = () => {
  return (
  <div className='themeSwitch'>
        <BackgroundWrapper>
          <HeaderBackground>
          </HeaderBackground>
      </BackgroundWrapper>
  </div>
  )
}

export default AppBackground 