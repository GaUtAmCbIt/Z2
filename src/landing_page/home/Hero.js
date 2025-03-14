import React from "react";
function Hero() {
  return (
    <>
      <div className="container p-5">
        <div className="row text-center">
          <img
            src="/media/images/homeHero.png"
            alt="hero image"
            className="mb-5"
            style={{ width: "70%", margin: "0 auto" }}
          ></img>
          <h1 className="mt-5">Invest in everything</h1>
          <p>
            Online platform to invest in stocks, derivatives, mutual funds,
            ETFs, bonds, and more.
          </p>
          <button
            className="btn btn-primary p-3 mt-3"
            style={{ width: "15%", margin: "0 auto" }}
          >
            Sign up for free
          </button>
        </div>
      </div>
    </>
  );
}

export default Hero;
