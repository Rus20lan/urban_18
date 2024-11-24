import React from "react";
import { Outlet } from "react-router-dom";
import Nav from "../nav/Nav";
import Footer from "../footer/Footer";

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
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default MainLayout;
