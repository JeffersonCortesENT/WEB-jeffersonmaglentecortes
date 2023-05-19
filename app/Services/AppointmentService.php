<?php
namespace App\Services;

use App\Constants\AppConstants;
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
    $aData = $this->processCheckBoxData($aData);
    return $this->oAppointmentRepository->saveAppointment($aData);
  }

  private function processCheckBoxData(array $aData)
  {
    $aData[AppConstants::APPLIED_WEEK_DAYS] = implode(',', $aData[AppConstants::APPLIED_WEEK_DAYS]);
    $aData[AppConstants::APPLIED_DAY_TIME] = implode(',', $aData[AppConstants::APPLIED_DAY_TIME]);
    return $aData;
  }
}
