import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Navbar from '../components/Navbar'
import './all.sass'

const TemplateWrapper = ({ children, data }) => (
  <div>
    <Helmet title="Home | Gatsby + Netlify CMS" />
    <Navbar pages={data.allMarkdownRemark.edges} />
    <div>{children()}</div>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper

export const lolQuery = graphql`
  query LolQuery {
    allMarkdownRemark {
      edges {
        node {
          id
          fields {
            slug
          }
          frontmatter {
            title
            name
            templateKey
          }
        }
      }
    }
  }
`
