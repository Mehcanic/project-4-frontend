import styled from "styled-components";

import { DefaultTheme, ThemedStyledProps } from 'styled-components'

import iconCheck from '../../assets/icon-check.svg'

// BUG find out why font-size doesn't work with theme variables

export const InputContainer = styled.div`
  background-color: ${props => props.theme.colors.secondary};
  color: ${props => props.theme.colors.fontColor};
  caret-color: ${props => props.theme.background.primary};
  font-weight: ${props => props.theme.typography.fontWeight.regular};
  /* font-size: ${props => props.theme.typography.fontSize.normal}; */
  border: 1px solid ${props => props.theme.colors.primary};
  border-radius: 5px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  padding: 1rem;

    &:hover {
      border: 1px solid ${props => props.theme.colors.accentDarkHover};
      
      .circle {
        border: .25px solid ${props => props.theme.colors.fontColor};
      }
    }

    .circle {
    border-radius: 50%;
    width: 24px;
    height: 24px;
    border: 5px solid ${props => props.theme.background.gradient}; 
    
    &:hover {
      border-width: 2px;

      &::before {
        content: '';
        position: absolute;
        top: 5px;
        left: 5px;
        right: 5px;
        bottom: 5px;
        border-radius: 50%;
        background: ${props => props.theme.background.secondary};
        z-index: 1;
      }
    }
  }
`;

export const TaskInput = styled.input`
  position: relative;
  z-index: 2;
  background-color: ${props => props.theme.colors.secondary};
  color: ${props => props.theme.colors.fontColor};
  font-weight: ${props => props.theme.typography.fontWeight.regular};
  font-size: 18px;
  border: none;
  width: 90%;
  outline: none;
`
