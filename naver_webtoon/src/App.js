import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Search from "./pages/Search";
import { ThemeProvider } from "./context/themeProvider";
import { GlobalStyle } from "./UI/theme/GlobalStyle";

function App() {
  return (
    <ThemeProvider>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
