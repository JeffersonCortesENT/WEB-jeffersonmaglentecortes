import React from "react"

const TemporaryForm = () => {
  return (
    <>
      <div>
      <div>
        <input type="radio" id="recurring" name="frequency" value="recurring" onChange={handleInputForm} checked={oFormAppointment.frequency !== '' && oFormAppointment.frequency === 'recurring'}/>
        <label htmlFor="recurring">Recurring</label><br/>
        <input type="radio" id="one_time" name="frequency" value="one_time" onChange={handleInputForm} checked={oFormAppointment.frequency !== '' && oFormAppointment.frequency === 'one_time'}/>
        <label htmlFor="one_time">One Time</label><br/>
        <input type="text" id="start_date" name="start_date" placeholder="YYYY-MM-DD" onInput={handleInputForm} value={oFormAppointment.start_date}/>
        <label htmlFor="start_date">Start Date</label><br/>
      </div>
      <div>
        <b>Days</b><i> Select all that apply</i><br/>
        <input type="checkbox" id="mon" name="applied_week_days" value={"mon"} onChange={handleChangeboxForm} checked={oFormAppointment.applied_week_days.includes('mon')} />
        <label htmlFor="mon">Monday</label><br/>
        <input type="checkbox" id="tue" name="applied_week_days" value={"tue"} onChange={handleChangeboxForm} checked={oFormAppointment.applied_week_days.includes('tue')}/>
        <label htmlFor="tue">Tuesday</label><br/>
        <input type="checkbox" id="wed" name="applied_week_days" value={"wed"} onChange={handleChangeboxForm} checked={oFormAppointment.applied_week_days.includes('wed')}/>
        <label htmlFor="wed">Wednesday</label><br/>
        <input type="checkbox" id="thu" name="applied_week_days" value={"thu"} onChange={handleChangeboxForm} checked={oFormAppointment.applied_week_days.includes('thu')}/>
        <label htmlFor="thu">Thursday</label><br/>
        <input type="checkbox" id="fri" name="applied_week_days" value={"fri"} onChange={handleChangeboxForm} checked={oFormAppointment.applied_week_days.includes('fri')}/>
        <label htmlFor="fri">Friday</label><br/>
        <input type="checkbox" id="sat" name="applied_week_days" value={"sat"} onChange={handleChangeboxForm} checked={oFormAppointment.applied_week_days.includes('sat')}/>
        <label htmlFor="sat">Saturday</label><br/>
        <input type="checkbox" id="sun" name="applied_week_days" value={"sun"} onChange={handleChangeboxForm} checked={oFormAppointment.applied_week_days.includes('sun')}/>
        <label htmlFor="sun">Sunday</label><br/>
      </div>
      <div>
        <b>Times</b><i> Select all that apply</i><br/>
        <input type="checkbox" id="morning" name="applied_day_time" value={"morning"} onChange={handleChangeboxForm} checked={oFormAppointment.applied_day_time.includes('morning')}/>
        <label htmlFor="morning">Morning</label><br/>
        <input type="checkbox" id="afternoon" name="applied_day_time" value={"afternoon"} onChange={handleChangeboxForm} checked={oFormAppointment.applied_day_time.includes('afternoon')}/>
        <label htmlFor="afternoon">Afternoon</label><br/>
        <input type="checkbox" id="evening" name="applied_day_time" value={"evening"} onChange={handleChangeboxForm} checked={oFormAppointment.applied_day_time.includes('evening')}/>
        <label htmlFor="evening">Evening</label><br/>
      </div>
      <div>
        <b>Notes for your sitter</b><br/>
        <textarea id="sitter_notes" name="sitter_notes" placeholder="Route preferences, leash location, treats given, etc." onInput={handleInputForm} value={oFormAppointment.sitter_notes}/>
      </div>
      <div>
        <button onClick={saveAppointment}>Save</button>
      </div>
      </div>
    </>
  );
}

export default TemporaryForm;