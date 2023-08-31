import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./pages/Main";
import Search from "./pages/Search/Search";
import IdolList from "./pages/List/IdolList";
import NFTDetail from "./pages/Detail/NFTDetail";

function App() {
  return (
    <div>
      <BrowserRouter basename="">
        <Routes>
          <Route path="/tonHack" element={<Main />} />
          <Route path="/tonHack/search" element={<Search />} />
          <Route path="/tonHack/idolList/:id" element={<IdolList />} />
          <Route path="/tonHack/NFTDetail/:id" element={<NFTDetail />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
