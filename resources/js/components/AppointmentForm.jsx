import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createAppointment, handleCheckboxChange, handleFormChange, selectAppointmentForm } from "../slices/appointmentSlice";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import moment from "moment/moment";
import { confirmSchedule, showError } from "../alerts/alerts";

const AppointmentForm = ({ appointmentRef }) => {
  const dispatch = useDispatch();
  const oFormAppointment = useSelector(selectAppointmentForm);

  const handleInputForm = (oEvent) => {
    const {name, value} = oEvent.target;
    dispatch(handleFormChange({name, value}));
  }

  const handleStartDate = (sDate) => {
    const iCurrentDate = Date.parse(new Date());
    const iSelectedDate = Date.parse(sDate);

    if (iSelectedDate < iCurrentDate) {
      showError('Error: Invalid start date value! Please select only current date or onwards');
    } else {
      dispatch(handleFormChange({name: 'start_date', value: moment(sDate).format('YYYY-MM-DD')}));
    }
  }

  const handleChangeboxForm = (oEvent) => {
    const {name, value} = oEvent.target;
    dispatch(handleCheckboxChange({name, value}));
  }

  const saveAppointment = async () => {
    let bInvalidForm = await checkForRequired(oFormAppointment);

    if (bInvalidForm == true) {
      let oConfirm = await confirmSchedule();

      if (oConfirm.isConfirmed == true) {
        dispatch(createAppointment(oFormAppointment));
      }
    }
  }

  const checkForRequired = async (oData) => {
    let bInvalidForm = true;

    if (oData.start_date === '') {
      showError('Start date field is a required field!');
      bInvalidForm = false;
    } else if (oData.applied_week_days.length === 0) {
      showError('Please select days that you want to apply for the appointment!');
      bInvalidForm = false;
    } else if (oData.applied_day_time.length === 0) {
      showError('Please select time of the day that you want to apply for the appointment!');
      bInvalidForm = false;
    }

    return bInvalidForm;
  }

  return (
    <>
      <section id="appointmentForm" className="appointment-section">
          <div className="row">
            <div className="col-lg-5 col-md-12 col-sm-12 inclusion-list">
                <div className="row">
                  <div className="col-lg-12 col-sm-12 col-xs-12">
                    <a className="inclusion-logo" href="#">
                      <img src="/images/pawtastic-logo.png" className="navbar-photo"/>PAWTASTIC
                    </a>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-12 col-sm-12 col-xs-12 inclusion-bullets">
                      <b>All services include: </b>
                      <ul>
                        <li><span>A photo update for you along</span></li>
                        <li><span>Notifications of your sitter's arrival</span></li>
                        <li><span>Treats for your pet, with your</span></li>
                      </ul>
                  </div>
                </div>
              </div>
            <div className="col-lg-7 col-md-12 col-sm-12 appointment-form" ref={appointmentRef}>
              <div className="row">
                <div className="col-12">
                  <b className="form-header-text">We'll take your dog for a walk. Just tell us when!</b>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
                  <legend>Frequency</legend>
                  <div className="frequency-selection">
                    <input type="radio" id="recurring" name="frequency" value="recurring" onChange={handleInputForm} checked={oFormAppointment.frequency !== '' && oFormAppointment.frequency === 'recurring'}/>
                    <label htmlFor="recurring">Recurring</label>
                    <input type="radio" id="one_time" name="frequency" value="one_time" onChange={handleInputForm} checked={oFormAppointment.frequency !== '' && oFormAppointment.frequency === 'one_time'}/>
                    <label htmlFor="one_time">One Time</label>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
                  <legend>Start Date</legend>
                  <div className="start-date">
                    <ReactDatePicker
                      placeholderText="MM/DD/YYYY"
                      selected={oFormAppointment.start_date !== '' ? new Date(oFormAppointment.start_date) : null}
                      className="date-style"
                      onChange={ (sDate) => { handleStartDate(sDate) }}
                      dateFormat={'MM/dd/yyyy'}
                      minDate={new Date()}
                    />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                  <legend>Days <i>Select all that apply</i></legend>
                    <div className="days-selection">
                      <input type="checkbox" id="mon" name="applied_week_days" value={"mon"} onChange={handleChangeboxForm} checked={oFormAppointment.applied_week_days.includes('mon')} />
                      <label htmlFor="mon" style={{borderRightStyle: 'none'}}>Mon</label>
                      <input type="checkbox" id="tue" name="applied_week_days" value={"tue"} onChange={handleChangeboxForm} checked={oFormAppointment.applied_week_days.includes('tue')}/>
                      <label htmlFor="tue">Tue</label>
                      <input type="checkbox" id="wed" name="applied_week_days" value={"wed"} onChange={handleChangeboxForm} checked={oFormAppointment.applied_week_days.includes('wed')}/>
                      <label htmlFor="wed">Wed</label>
                      <input type="checkbox" id="thu" name="applied_week_days" value={"thu"} onChange={handleChangeboxForm} checked={oFormAppointment.applied_week_days.includes('thu')}/>
                      <label htmlFor="thu">Thu</label>
                      <input type="checkbox" id="fri" name="applied_week_days" value={"fri"} onChange={handleChangeboxForm} checked={oFormAppointment.applied_week_days.includes('fri')}/>
                      <label htmlFor="fri">Fri</label>
                      <input type="checkbox" id="sat" name="applied_week_days" value={"sat"} onChange={handleChangeboxForm} checked={oFormAppointment.applied_week_days.includes('sat')}/>
                      <label htmlFor="sat">Sat</label>
                      <input type="checkbox" id="sun" name="applied_week_days" value={"sun"} onChange={handleChangeboxForm} checked={oFormAppointment.applied_week_days.includes('sun')}/>
                      <label htmlFor="sun">Sun</label>
                    </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                  <legend>Times <i>Select all that apply</i></legend>
                    <div className="time-selection">
                      <input type="checkbox" id="morning" name="applied_day_time" value={"morning"} onChange={handleChangeboxForm} checked={oFormAppointment.applied_day_time.includes('morning')}/>
                      <label htmlFor="morning">Morning</label>
                      <input type="checkbox" id="afternoon" name="applied_day_time" value={"afternoon"} onChange={handleChangeboxForm} checked={oFormAppointment.applied_day_time.includes('afternoon')}/>
                      <label htmlFor="afternoon">Afternoon</label>
                      <input type="checkbox" id="evening" name="applied_day_time" value={"evening"} onChange={handleChangeboxForm} checked={oFormAppointment.applied_day_time.includes('evening')}/>
                      <label htmlFor="evening">Evening</label>
                    </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                  <legend>Notes for your sitter</legend>
                    <div className="sitter_notes">
                      <textarea name="sitter_notes" placeholder="Route preferences, leash location, treats given, etc." onInput={handleInputForm} value={oFormAppointment.sitter_notes}/>
                    </div>
                </div>
              </div>
              <div className="row">
                <div className="submit-form">
                  <button onClick={saveAppointment}>Schedule Service</button>
                </div>
              </div>
            </div>
          </div>
      </section>
    </>
  );
}

export default AppointmentForm;