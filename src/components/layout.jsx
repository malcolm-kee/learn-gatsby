import React from 'react';
import { Header } from './header';
import './layout.scss';

export const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main className="layout-container">{children}</main>
    </>
  );
};
