import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./Header";
import Temptoday from "./Temptoday";
import Footer from "./Footer";
import "./styles.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <div className="weather-app-body">
      <Header />
      <Temptoday />
      <Footer />
    </div>
  </React.StrictMode>
);
