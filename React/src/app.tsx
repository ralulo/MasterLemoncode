import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { LoginPage } from "./login";
import { ListPage } from "./list";
import { DetailPage } from "./detail";
import { MyContext, MyContextProvider } from "./my-context";
import { ListPageApi } from "./list-api";
import { DetailPageApi } from "./detail-api";
import { Navbar } from "./navbar";

export const App = () => {
  return (
    <MyContextProvider>
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/list" element={<ListPage />} />
        <Route path="/detail/:id" element={<DetailPage />} />
        <Route path="/list-api" element={<ListPageApi />} />
        <Route path="/detail-api/:id" element={<DetailPageApi />} />
        <Route path="/navbar" element={<Navbar/>} />
      </Routes>
    </Router>
    </MyContextProvider>
  );
};
