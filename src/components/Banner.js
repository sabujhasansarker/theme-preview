import React from "react";

const Banner = () => {
  return (
    <div className="banner d-flex align-items-center bg-protfulio-bg" id="home">
      <div className="container-sm	">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <h1 className="font-weight-600">
              Landing Page with <br /> Dashboard Template <br /> Dark & Light
            </h1>
            <p className="text-protfulio h5 lh-base p-mb-3 p-mt-3">
              Tradix is the complete UI of Front end and Backend. Sign in,
              Signup, Phone and ID card verification, One time password verify
              and add bank, debit card settings and profile etc pages included.
            </p>
            <div className="d-md-flex align-items-center mb-5">
              <a
                href="https://themeforest.net/item/covtrack-coronavirus-live-traker-dashboard/26313593"
                className="btn btn-primary mr-3 btn-banner d-table mb-2 mb-md-0"
              >
                Buy
              </a>
              <a
                href="https://docs.google.com/forms/d/1AD86Th5E7lBRtp3mwVN4p5xTE7X7vzj6DsTt1cgQgyc/edit#responses"
                className="btn btn-outline-primary btn-banner d-table "
                target="_blank"
              >
                Hire me
              </a>
            </div>
          </div>
          <div className="col-lg-6">
            <img
              className="img-fluid"
              src="https://quixlab.com/demo/tradix/images/portfolio.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
