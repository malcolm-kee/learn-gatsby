import { useStaticQuery, graphql } from 'gatsby';
import React from 'react';
import './header.scss';

export const Header = () => {
  const result = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <header className="header">
      <div className="header-container">{result.site.siteMetadata.title}</div>
    </header>
  );
};
