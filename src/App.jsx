import { useState } from "react";
import "./App.css";
import Header from "./Components/Header";
import Footer from "./Components/footer";
import Main from "./Components/MainContent";

function App() {
  const [page, setPage] = useState("Home");

  return (
    <>
      <Header setPage={setPage} page={page} />
      <Main setPage={setPage} page={page} />
      <Footer />
    </>
  );
}

export default App;
