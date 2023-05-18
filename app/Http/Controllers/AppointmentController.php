<?php
namespace App\Http\Controllers;

use App\Http\Requests\AppointmentRequest;
use App\Services\AppointmentService;

class AppointmentController extends Controller
{
  private $oAppointmentService;

  public function __construct(AppointmentService $oAppointmentService)
  {
    $this->oAppointmentService = $oAppointmentService;
  }

  public function saveAppointment(AppointmentRequest $oRequest)
  {
    $aResponse = $this->oAppointmentService->saveAppointment($oRequest->all());
    return response()->json($aResponse);
  }
}
