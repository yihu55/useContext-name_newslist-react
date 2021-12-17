import React, { createContext, useState, useEffect } from "react";
import { Routes, Route, Link } from "react-router-dom";
import NewListPage from "./pages/NewListPage";
import StartPage from "./pages/StartPage";
import NewsDetailPage from "./pages/NewsDetailPage";
const NameContext = createContext({});
function App() {
  const [name, setName] = useState("");
  const [newsList, setNewsList] = useState(null);
  //const myName = "Yi";

  useEffect(() => {
    const url =
      "https://mock-data-api-2021-default-rtdb.europe-west1.firebasedatabase.app/news.json";
    fetch(url)
      .then((res) => res.json())
      .then((data) => setNewsList(data));
  }, []);
  return (
    <NameContext.Provider value={{ name, setName, newsList, setNewsList }}>
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            hej {name}
            <Link to="/">Start page</Link>
            <Link to="/news">News page</Link>
          </div>
          <div className="col-md-9">
            <Routes>
              <Route path="/" element={<StartPage />} />
              <Route path="/news" element={<NewListPage />} />
              <Route path="/news/:id" element={<NewsDetailPage />} />
            </Routes>
          </div>
        </div>
      </div>
    </NameContext.Provider>
  );
}
export { NameContext };
export default App;
