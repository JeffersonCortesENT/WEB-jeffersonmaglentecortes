<?php
namespace App\Repositories;

use App\Interfaces\AppointmentRepositoryInterface;
use App\Models\Appointment;


class AppointmentRepository implements AppointmentRepositoryInterface
{

  public function saveAppointment(array $aData)
  {
    return Appointment::create($aData);
  }
}
