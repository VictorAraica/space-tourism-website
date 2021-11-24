import "./App.css";
import { ThemeProvider } from "styled-components";
import { theme } from "./theme";
import Header from "./components/header/Header";
import Home from "./pages/Home/Home";
import Destination from "./pages/Destination/Destination";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [currentPage, setCurrentPage] = useState("home");

  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <div className="App">
          <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/destination" element={<Destination />} />
          </Routes>
        </div>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
