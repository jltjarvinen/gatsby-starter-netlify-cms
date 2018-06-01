import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Navbar from '../components/Navbar'
import './all.sass'

const TemplateWrapper = ({ children, data }) => (
  <div>
    <Helmet title={data.site.siteMetadata.title} />
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
    site {
      siteMetadata {
        title
      }
    },
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
