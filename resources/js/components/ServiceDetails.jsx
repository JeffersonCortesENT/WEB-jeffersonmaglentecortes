import React from "react";

const ServiceDetails = ({ serviceRef, moveToAppointmentForm }) => {

  const moveToAppointment = (oEvent) => {
    oEvent.preventDefault();
    moveToAppointmentForm()
  }

  return (
    <>
      <section ref={serviceRef} className="service-section">
        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 service-description">
            <p className="description-header">
              Expert care for your furry, feathery, or scaley friend
            </p>
            <p className="description-main">
              We know how stressful it is to leave your pets at home alone. We're a team of experienced animal caregivers, well connected to local veterinarians. Trust to us love them like our own, and to keep them safe and happy till you're home.
            </p>
            <div>
              <button className="service-button" onClick={moveToAppointment}>Schedule a visit</button>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 service-gallery">
            <div className="row">
              <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12">
                <img
                  src="/images/cat.jpg"
                  className="gallery-image"
                  alt="Cat"
                />
              </div>
              <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12">
                <img
                  src="/images/parrot.jpg"
                  className="gallery-image"
                  alt="Parrot"
                />
              </div>
              <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12">
                <img
                  src="/images/husky.jpg"
                  className="gallery-image"
                  alt="Husky"
                />
              </div>
              <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12">
                <img
                  src="/images/hamster.jpg"
                  className="gallery-image"
                  alt="Hamster"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ServiceDetails;