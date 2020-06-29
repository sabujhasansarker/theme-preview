import React from "react";

const Navbar = () => {
  return (
    <header className="bg-white position-sticky pt-3 pb-3 shadow p-3  bg-white rounded">
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light bg-white ">
          <div className="container-fluid">
            <a className="navbar-brand font-weight-bold" href="#home">
              Protfulio
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarNavDropdown"
              aria-controls="navbarNavDropdown"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse justify-content-end"
              id="navbarNavDropdown"
            >
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a
                    className="nav-link active"
                    aria-current="page"
                    href="#home"
                  >
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#demo">
                    Demo
                  </a>
                </li>

                <li className="nav-item">
                  <a className="nav-link" href="#support">
                    Support
                  </a>
                </li>
              </ul>
              <div className="d-md-flex align-items-center ml-lg-3 mt-2 mt-lg-0">
                <a
                  href="https://themeforest.net/item/covtrack-coronavirus-live-traker-dashboard/26313593"
                  className="btn btn-primary px-4 btn-nav d-table mb-2 mb-md-0 "
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Buy
                </a>
                <a
                  href="https://docs.google.com/forms/d/1AD86Th5E7lBRtp3mwVN4p5xTE7X7vzj6DsTt1cgQgyc/edit#responses"
                  className="btn btn-outline-primary ml-md-2 btn-nav d-table "
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Hire me
                </a>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
