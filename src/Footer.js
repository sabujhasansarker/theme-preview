import React from "react";

const Footer = () => {
  return (
    <footer className="text-protfulio  text-xm-center">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-xl-6 col-md-8">
            <div class="copy_right">
              Copyright © 2019 Quixlab. All Rights Reserved.
            </div>
          </div>
          <div class="col-xl-6 col-md-4 text-center text-md-right text-sm-center">
            <div class="social ">
              <a
                className="text-protfulio "
                href="https://www.youtube.com/channel/UChN1goECpg64jlUxSzySiNg?view_as=subscriber"
              >
                <i class="fa fa-youtube-play"></i>
              </a>
              <a className="text-protfulio " href="https://twitter.com/quixlab">
                <i class="fa fa-twitter"></i>
              </a>
              <a
                className="text-protfulio "
                href="https://www.facebook.com/qxlab"
              >
                <i class="fa fa-facebook"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
