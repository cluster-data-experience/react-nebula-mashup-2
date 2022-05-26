import React from "react";
import { useNebula } from "../../Context/Nebula";

const Page2 = () => {
  const { app } = useNebula();

  return (
    <div className="page">
      <div className="row">
        <div className="col-lg-12">
          <div className="view-header">
            <div className="header-icon">
              <i className="material-icons"></i>
            </div>
            <div className="header-title">
              <h3>Sales Analysis</h3>
            </div>
            <p className="description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page2;
