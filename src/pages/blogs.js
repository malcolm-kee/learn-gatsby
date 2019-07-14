import { graphql, Link } from 'gatsby';
import React from 'react';
import { Layout } from '../components/layout';

const BlogsPage = ({ data }) => {
  return (
    <Layout>
      <h1>Blogs</h1>
      <p>{data.allMarkdownRemark.totalCount} posts</p>
      {data.allMarkdownRemark.edges.map(({ node }) => (
        <div key={node.id}>
          <h3>
            {node.frontmatter.title} <small>{node.frontmatter.date}</small>
            <Link to={node.frontmatter.path}>Read</Link>
          </h3>
        </div>
      ))}
    </Layout>
  );
};

export const query = graphql`
  query AllBlogsQuery {
    allMarkdownRemark {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
            path
          }
        }
      }
    }
  }
`;

export default BlogsPage;
