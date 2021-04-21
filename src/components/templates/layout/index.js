import React from 'react'
import PropTypes from 'prop-types'
import { Seo } from '_atoms'

import '_styles/base.css'

const Layout = ({ children }) => {
  return (
    <div className="app">
      <Seo />
      {children}
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
