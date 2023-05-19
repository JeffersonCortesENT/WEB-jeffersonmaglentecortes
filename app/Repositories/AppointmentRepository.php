<?php
namespace App\Repositories;

use App\Constants\AppConstants;
use App\Interfaces\AppointmentRepositoryInterface;
use App\Models\Appointment;
use Illuminate\Support\Facades\Log;
use Exception;

class AppointmentRepository implements AppointmentRepositoryInterface
{

  public function saveAppointment(array $aData)
  {
    try 
    {
      Appointment::create($aData);
      return [
        AppConstants::STATUS => 200,
        AppConstants::RESPONSE => AppConstants::REQUEST_SUCCESS
      ];
    } catch (Exception $oError) {
      Log::error($oError);
      return [
        AppConstants::STATUS => 500,
        AppConstants::RESPONSE => AppConstants::REQUEST_ERROR
      ];
    }
  }
}
