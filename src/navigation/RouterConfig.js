import React from 'react'
import { Fragment } from 'react'
import { Routes, Route } from 'react-router-dom'
import { Layout } from 'views/Layout'
import { Home } from 'views/Home'
import { NotFound } from 'navigation/NotFound'
import { ROOT, PAGE1 } from "navigation/CONSTANTS"
import { Page1 } from 'views/Page1'

export const RouterConfig = () => {
  return (
    <Fragment>
      <Routes>
        <Route path={ROOT} element={<Layout />} >
          <Route index element={<Home />} />
          <Route path={PAGE1} element={<Page1 />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Fragment>
  )
}
