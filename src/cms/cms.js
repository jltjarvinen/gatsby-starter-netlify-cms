import CMS from 'netlify-cms'

import BlogPostPreview from './preview-templates/BlogPostPreview'
import PagePreview from './preview-templates/PagePreview'

CMS.registerPreviewStyle('/styles.css')
CMS.registerPreviewTemplate('page', PagePostPreview)
CMS.registerPreviewTemplate('blog', BlogPostPreview)
