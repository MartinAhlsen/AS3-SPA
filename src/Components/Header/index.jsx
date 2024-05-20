import React from "react";
import Nav from "../Nav";

const Header = ({ setPage, page }) => {
  return (
    <>
      <header>
        <h1>Baking with Vader</h1>
        <Nav setPage={setPage} page={page} />
      </header>
    </>
  );
};

export default Header;
