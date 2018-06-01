import React from 'react'
import PropTypes from 'prop-types'
import { OtherPostTemplate } from '../../templates/other'

const OtherPostPreview = ({ entry, widgetFor }) => (
  <OtherPostTemplate
    content={widgetFor('body')}
    name={entry.getIn(['data', 'name'])}
    title={entry.getIn(['data', 'title'])}
  />
)

OtherPostPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default OtherPostPreview
