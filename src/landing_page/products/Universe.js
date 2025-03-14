import React from "react";

function Universe() {
  return (
    <>
      <div className="container text-center">
        <h2>The Zerodha Universe</h2>
        <p className="p-3">
          Extend your trading and investment experience even further with our
          partner platforms
        </p>
        <div className="row">
          <div className="col-4">
            <div className="my-4">
              <img src="/media/images/sensibullLogo.svg" style={{width:"50%"}}></img>
              <p className="p-3" style={{fontSize:"12px"}}>
                Options trading platform that lets you create strategies,analyze positions and examine data points like open interest , FII/DII , and more.
              </p>
            </div>
            <div>
              <img src="/media/images/tijori.png" style={{width:"20%"}}></img>
              <p className="p-3" style={{fontSize:"12px"}}>
                Investment research platform that offers detailed insights on stocks,sectors,supply chains ,  and more.
              </p>
            </div>
          </div>
          <div className="col-4">
            <div>
              <img src="/media/images/streakLogo.png" style={{width:"50%"}}></img>
              <p className="p-3" style={{fontSize:"12px"}}>
               Systematic trading platform that allows you to create and backtest strategies without coding.
              </p>
            </div>
            <div>
              <img src="/media/images/smallcaseLogo.png"  style={{width:"50%"}}></img>
              <p className="p-3" style={{fontSize:"12px"}}>
                Thematic investing platform that helps you invest in diversified backets of stocks on ETFs.
              </p>
            </div>
          </div>
          <div className="col-4">
            <div>
              <img src="/media/images/zerodhaFundhouse.png" style={{width:"50%"}}></img>
              <p className="p-3" style={{fontSize:"12px"}}>
                Our asset management venture that is creating simple and
                transparent index funds to help you save for your goals.
              </p>
            </div>
            <div>
              <img src="/media/images/dittoLogo.png" style={{width:"50%"}}></img>
              <p className="p-3" style={{fontSize:"12px"}} >
                Personalized advice on life and health insurance . No spam and no mis-selling.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Universe;
