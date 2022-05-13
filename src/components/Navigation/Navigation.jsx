import React from "react";
import { Fragment } from "react";
import { NavigationContainer } from "./navigation.styles";
import { NavigationView } from "./NavigationView";

export const Navigation = () => {
  return (
    <Fragment>
      <NavigationContainer>
        <NavigationView></NavigationView>
      </NavigationContainer>
    </Fragment>
  )
}