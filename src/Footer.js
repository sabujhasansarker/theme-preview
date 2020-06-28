import React from "react";

const Footer = () => {
  return (
    <footer className="text-protfulio  text-xm-center">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-xl-6 col-md-8">
            <div className="copy_right">
              Copyright © 2019 Quixlab. All Rights Reserved.
            </div>
          </div>
          <div className="col-xl-6 col-md-4 text-center text-md-right text-sm-center">
            <div className="social ">
              <a
                className="text-protfulio "
                href="https://www.youtube.com/channel/UChN1goECpg64jlUxSzySiNg?view_as=subscriber"
              >
                <i className="fa fa-youtube-play"></i>
              </a>
              <a className="text-protfulio " href="https://twitter.com/quixlab">
                <i className="fa fa-twitter"></i>
              </a>
              <a
                className="text-protfulio "
                href="https://www.facebook.com/qxlab"
              >
                <i className="fa fa-facebook"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
