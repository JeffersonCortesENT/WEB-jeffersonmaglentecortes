<?php
namespace App\Services;

use App\Interfaces\AppointmentRepositoryInterface;

class AppointmentService
{
  private AppointmentRepositoryInterface $oAppointmentRepository;

  public function __construct(AppointmentRepositoryInterface $oAppointmentRepository)
  {
    $this->oAppointmentRepository = $oAppointmentRepository;
  }

  public function saveAppointment(array $aData)
  {
    return $this->oAppointmentRepository->saveAppointment($aData);
  }
}
