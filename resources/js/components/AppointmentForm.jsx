import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createAppointment, handleCheckboxChange, handleFormChange, selectAppointmentForm } from "../slices/appointmentSlice";

const AppointmentForm = ({ appointmentRef }) => {
  const dispatch = useDispatch();
  const oFormAppointment = useSelector(selectAppointmentForm);

  const handleInputForm = (oEvent) => {
    const {name, value} = oEvent.target;
    dispatch(handleFormChange({name, value}));
  }

  const handleChangeboxForm = (oEvent) => {
    const {name, value} = oEvent.target;
    dispatch(handleCheckboxChange({name, value}));
  }

  const saveAppointment = () => {
    dispatch(createAppointment(oFormAppointment));
  }

  return (
    <>
      <section ref={appointmentRef} id="appointmentForm" className="appointment-section">
          <div className="row">
            <div className="col-lg-5 inclusion-list">
                <div className="row">
                  <div className="col-lg-12 col-sm-12 col-xs-12">
                    <a className="inclusion-logo" href="#">
                      <img src="/images/pet-shop-logo.png" className="navbar-photo"/>PAWTASTIC
                    </a>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-12 col-sm-12 col-xs-12 inclusion-bullets">
                      {/* <a className="inclusion-logo" href="#">
                        <img src="/images/pet-shop-logo.png" className="navbar-photo"/>PAWTASTIC
                      </a><br/> */}
                      <b>All services include: </b>
                      <ul>
                        <li><span>A photo update for you along</span></li>
                        <li><span>Notifications of your sitter's arrival</span></li>
                        <li><span>Treats for your pet, with your</span></li>
                      </ul>
                  </div>
                </div>
              </div>
            <div className="col-lg-7 appointment-form">
            </div>
          </div>
      </section>
    </>
  );
}

export default AppointmentForm;