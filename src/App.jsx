import React from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import CatalogPage from "./pages/CatalogPage";
import CatalogDetailsPage from "./pages/CatalogDetailsPage";
import ContactPage from "./pages/ContactPage";
import AboutUsPage from "./pages/AboutUsPage";
import NotFoundPage from "./pages/NotFoundPage";
import Layout from "./components/Layout/layout";

const App = () => {
  // Home Button
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate("/catalog");
  };
  return (
    <div>
      <Routes>
        <Route index element={<HomePage handleNavigate={handleNavigate} />} />
        <Route path="/" element={<Layout />}>
          <Route path="/catalog" element={<CatalogPage />} />
          <Route path="/catalog/:catalogId" element={<CatalogDetailsPage />} />
          <Route path="/contacts" element={<ContactPage />} />
          <Route path="/aboutUs" element={<AboutUsPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
