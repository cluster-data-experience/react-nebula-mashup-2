import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useNebula } from "../Context/Nebula";

// pages 
import Home from "../Pages/Home";

function Layout() {
  const { nebula } = useNebula();

  useEffect(() => {
    console.log('nebula', nebula);
  });

  return (
    <>
      <>
        <BrowserRouter>
          <div className="layout">
            <Routes>
              <Route
                path="/"
                element={<Home />}
              />
            </Routes>
          </div>
        </BrowserRouter>
      </>
    </>
  );
}

export default Layout;
