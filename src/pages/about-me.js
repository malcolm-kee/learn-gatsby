import { graphql } from 'gatsby';
import React from 'react';
import { Layout } from '../components/layout';

const Nonsense = ({ data }) => {
  return (
    <Layout>
      <h1>About Me</h1>
      <p>Malcolm</p>
      <ul>
        {data.site.siteMetadata.keywords.map((keyword, index) => (
          <li key={index}>{keyword}</li>
        ))}
      </ul>
    </Layout>
  );
};

export const pageQuery = graphql`
  {
    site {
      siteMetadata {
        title
        keywords
      }
    }
  }
`;

export default Nonsense;
