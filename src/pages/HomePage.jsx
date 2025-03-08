import React from "react";

const HomePage = ({ handleNavigate }) => {
  return (
    <div>
      <button onClick={handleNavigate}>buy!</button>
    </div>
  );
};

export default HomePage;
