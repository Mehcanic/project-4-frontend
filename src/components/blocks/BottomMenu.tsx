import { useState, useEffect } from "react"
import styled, { DefaultTheme } from "styled-components"

import { ThemeProps } from "../../types"

import { Menu } from "./BottomMenu.style"

import FilterTasks from "../elements/FilterTasks"




const BottomMenu = ({ theme, tasks }: ThemeProps) => {

  return (
      <Menu theme={theme}>
          <div className="item-container" id="items-left-container">
            <p>{tasks.length} items left</p>
          </div>
          <div className="item-container hoover" id="filters-container">
            <FilterTasks action="All" />
            <FilterTasks action="Active" /> 
            <FilterTasks action="Completed" /> 
          </div>
          <div className="item-container hoover" id="clear-container">
            <p>Clear completed</p>
          </div>
      </Menu>
  )
}

export default BottomMenu