import styled from 'styled-components'

type ThemeIconProps = {
  icon: string;
  onClick: () => void;
}

const Icon = styled.img`
  width: 26px;
  height: 26px;
`


const ThemeIcon = ({ icon, onClick }: ThemeIconProps) => {
  return (
    <Icon src={icon} alt="" onClick={onClick}/>
    )
}

export default ThemeIcon