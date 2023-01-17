import React from "react";
import { Link, useLocation } from "react-router-dom";
import thanks from "../assets/Online payment_Two Color(1) 2.svg";
import "../style/Rating.css";

const Rating = () => {
  const location = useLocation();
  const { state } = location;
  console.log({ state });
  return (
    <div className="container container-center">
      <img src={thanks} alt="thanks" />
      <p className="ratingBox">
        {" "}
        You selected <span>{state.score} out of 5</span>
      </p>
      <h1>Thank you!</h1>
      <p>
        We appreciate you taking the time to give a rating. If you ever need
        more support, don’t hesitate to get in touch!
      </p>
      <Link
        to="/"
        className="submit"
        style={{ width: "100%", textDecoration: "none", fontWeight: "bold" }}
      >
        GO BACK
      </Link>
    </div>
  );
};

export default Rating;
