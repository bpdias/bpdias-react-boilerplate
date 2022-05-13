import React from 'react'
import { Fragment } from 'react'
import { Outlet } from 'react-router-dom'
import { Navigation } from 'components/Navigation/Navigation'

export const Layout = () => {
  return (
    <Fragment>
      <Navigation></Navigation>
      <Outlet />
    </Fragment>
  )
}
