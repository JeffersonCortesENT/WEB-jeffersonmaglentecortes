import React, { useRef } from "react";
import AppointmentForm from "./AppointmentForm";
import Banner from "./Banner";
import ServiceDetails from "./ServiceDetails";

const HomePage = () => {
  const appointmentRef = useRef(null);
  const serviceRef = useRef(null);

  const moveToAppointmentForm = () => {
    appointmentRef.current?.scrollIntoView({behavior: 'smooth'});
  }

  const moveToServiceForm = () => {
    appointmentRef.current?.scrollIntoView({behavior: 'smooth'});
  }

  return (
    <>
      <div>
        <Banner
          moveToAppointmentForm={moveToAppointmentForm}
          moveToServiceForm={moveToServiceForm}
        />
        <ServiceDetails 
          serviceRef={serviceRef}
          moveToAppointmentForm={moveToAppointmentForm}
        />
        <AppointmentForm
          appointmentRef={appointmentRef}
        />
      </div>
    </>
  );
}

export default HomePage;