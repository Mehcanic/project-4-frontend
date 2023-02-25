import styled from "styled-components"
import { darkTheme } from '../../styles/theme'

const LogoText = styled.h1`
  color: #fff;
  font-size: ${darkTheme.typography.fontSize.header};
  font-weight: ${darkTheme.typography.fontWeight.bold};
  letter-spacing: 15px;
  line-height: 40px;
  margin: 0;
`


const HeaderTitle = () => {

  return (
    <div className="logo">
      <LogoText>TODO</LogoText>
    </div>
  )
}

export default HeaderTitle