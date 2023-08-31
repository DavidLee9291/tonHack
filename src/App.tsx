import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./pages/Main";
import Search from "./pages/Search/Search";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/tonHack" element={<Main />} />
          <Route path="/tonHack/search" element={<Search />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
