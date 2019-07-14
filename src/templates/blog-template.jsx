import React from 'react';
import { graphql } from 'gatsby';
import { Layout } from '../components/layout';

const BlogTemplate = ({ data }) => {
  return (
    <Layout>
      <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} />
    </Layout>
  );
};

export const pageQuery = graphql`
  query BlogQuery($id: String) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        date(formatString: "DD MMM YY")
        title
      }
    }
  }
`;

export default BlogTemplate;
