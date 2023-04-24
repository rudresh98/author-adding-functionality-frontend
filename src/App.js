import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import CreateAuthor from "./components/CreateAuthor";
import Header from "./components/Header";
import Author from "./components/Author";
import Authordetails from "./components/Authordetails";
function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Author />}></Route>
          <Route path="/author" element={<Author />}></Route>
          <Route path="/author/:id" element={<Authordetails />}></Route>
          <Route path="/create-author" element={<CreateAuthor />}></Route>
          <Route path="*/*" element={<Author />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
