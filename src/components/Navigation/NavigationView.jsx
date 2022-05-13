import React from "react";
import { Fragment } from "react";
import { ROOT, PAGE1 } from 'navigation/CONSTANTS'
import { NavigationLink } from "./navigation.styles";

export const NavigationView = () => {
  return (
    <Fragment>
      <nav>
        <ul>
          <li>
            <NavigationLink to={ROOT}>Home</NavigationLink>
          </li>
          <li>
            <NavigationLink to={PAGE1}>Page1</NavigationLink>
          </li>
        </ul>
      </nav>
    </Fragment>
  )
}