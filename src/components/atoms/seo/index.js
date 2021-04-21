import React from 'react'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'

const Seo = ({ title, description }) => (
  <Helmet>
    <title>Onde Estudar?</title>
    <meta name="description" content="Onde estudar?" />
  </Helmet>
)
export default Seo
Seo.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
}
Seo.defaultProps = {
  title: null,
  description: null,
}
