import React from "react";

const Support = () => {
  return (
    <div
      className="support text-center bg-protfulio-bg text-protfulio pt-5 pb-5"
      id="support"
    >
      <div className="container">
        <div className="header">
          <p>Problem?</p>
          <h4>Don't Worry, I am waiting your question</h4>
          <p>Refreshing my inbox, waiting for your mail</p>
        </div>
        <div className="row pt-5">
          <div className="col-md-4">
            <div className="features-content">
              <span>
                <i className="fa fa-skype"></i>
              </span>
              <h4>sporsho9</h4>
              <p>
                Without sleeping time, I am avaiable in skype. I recommend Skype
              </p>
              <a href="skype:profile_name?sporsho9">
                Add Skype <i className="fas fa-chevron-right"></i>
              </a>
            </div>
          </div>
          <div className="col-md-4">
            <div className="features-content">
              <span>
                <i className="fa fa-envelope"></i>
              </span>
              <h4>quixlab.com@gmail.com</h4>
              <p>
                When you send me email, I get notification, and quickly reply
                you
              </p>
              <a href="mailto:quixlab.com@gmail.com">
                Send Email <i className="fas fa-chevron-right"></i>
              </a>
            </div>
          </div>
          <div className="col-md-4">
            <div className="features-content">
              <span>
                <i className="fa fa-life-ring"></i>
              </span>
              <h4>Hire me</h4>
              <p>
                You have need more design or customization? Dont worry about
                Quality
              </p>
              <a href="https://docs.google.com/forms/d/1AD86Th5E7lBRtp3mwVN4p5xTE7X7vzj6DsTt1cgQgyc/edit#responses">
                Hire Now <i className="fas fa-chevron-right"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Support;
