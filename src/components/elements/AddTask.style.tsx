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

  
`;

export const TaskInput = styled.input`
  font-size: 18px;
  background-color: ${props => props.theme.colors.secondary};
  color: ${props => props.theme.colors.fontColor};
  font-weight: ${props => props.theme.typography.fontWeight.regular};
  border: none;
  width: 90%;
  outline: none;

`
