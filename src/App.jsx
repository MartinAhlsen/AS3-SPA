import { useState } from "react";
import "./App.css";
import Header from "./Components/Header";
// import Footer from "./Components/Footer";
import FooterC from "./Components/Footercopy";
import Main from "./Components/MainContent";

function App() {
  const [page, setPage] = useState("Home");

  return (
    <>
      <Header setPage={setPage} />
      <Main setPage={setPage} page={page} />
      <FooterC />
    </>
  );
}

export default App;
