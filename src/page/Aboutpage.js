import React from "react";
import { useNavigate } from "react-router-dom";
const Aboutpage = () => {
  const navigate = useNavigate();
  const GoToHomepage = () => {
    navigate("/");
  };
  return (
    <div>
      <h1>Aboutpage</h1>
      <button onClick={GoToHomepage}>Go to Homepage</button>
    </div>
  );
};

export default Aboutpage;
