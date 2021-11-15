import "./App.css";
import { ThemeProvider } from "styled-components";
import { theme } from "./theme";
import Header from "./components/header/Header";
import Home from "./pages/Home";
import { useState } from "react";

function App() {
  const [currentPage, setCurrentPage] = useState("home");

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Header currentPage={currentPage} />
        <Home />
      </ThemeProvider>
    </div>
  );
}

export default App;
