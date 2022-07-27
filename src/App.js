import "./App.css";
import { useState } from "react";
import { UserContext } from "./contexts/User";

//Components
import Header from "./components/Header";
import Navigator from "./components/Navigator";
import Home from "./components/Home";
import Articles from "./components/Articles";
import ArticleCard from "./components/ArticleCard";
import ArticleComments from "./components/ArticleComments";

//Routing
import { BrowserRouter, Routes, Route } from "react-router-dom";

//Resources
import defaultUser from "./images/default-user.png";

function App() {
  const [user, setUser] = useState({
    username: "DefaultUsername",
    name: "User",
    avatar_url: defaultUser,
  });
  return (
    <BrowserRouter>
      <UserContext.Provider value={{ user, setUser }}>
        <div className="App">
          <Header />
          <Navigator />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/articles" element={<Articles />} />
            <Route path="/articles/:topic" element={<Articles />} />
            <Route path="/article/:article_id" element={<ArticleCard />} />
            <Route
              path="/article/:article_id/comments"
              element={<ArticleComments />}
            />
          </Routes>
        </div>
      </UserContext.Provider>
    </BrowserRouter>
  );
}

export default App;
