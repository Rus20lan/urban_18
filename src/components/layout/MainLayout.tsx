import React from 'react';
import { Outlet } from 'react-router-dom';
import Nav from '../nav/Nav';

interface Props {}

function MainLayout(props: Props) {
  const {} = props;

  return (
    <>
      <header>
        <Nav />
      </header>
      <main>
        <Outlet />
      </main>
      <footer>Это футор</footer>
    </>
  );
}

export default MainLayout;
