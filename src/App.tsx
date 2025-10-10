import { useState } from "react";
import { Routes, Route } from "react-router-dom";

import Header from "./components/Header/Header";
import Main from "./pages/Main";
import Product from "./pages/Product";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/product/:productType" element={<Product />} />
      </Routes>
    </>
  );
};

export default App;
