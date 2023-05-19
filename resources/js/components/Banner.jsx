import React from "react";

const Banner = ({ moveToAppointmentForm, moveToServiceForm }) => {

  const moveToAppointment = (oEvent) => {
    oEvent.preventDefault();
    moveToAppointmentForm()
  }

  const moveToService = (oEvent) => {
    oEvent.preventDefault();
    moveToServiceForm()
  }

  return (
    <>
      <section className="banner-section">
        <nav className="navbar navbar-expand-lg">
          <a className="navbar-brand" href="#">
            <img src="/images/pawtastic-logo.png" className="navbar-photo"/>PAWTASTIC
          </a>

          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" href="#" onClick={moveToService}>About Us</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#" onClick={moveToAppointment}>Schedule a Visit</a>
              </li>
            </ul>
          </div>
        </nav>

        <div className="row">
          <div className="col-lg-6"></div>
          <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12 banner-description">
              <p>
              We care for <br/>
              your furry little loved ones<br/>
              While
              </p>
            <div>
              <button className="banner-button" onClick={moveToAppointment}>Schedule a Visit</button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Banner;