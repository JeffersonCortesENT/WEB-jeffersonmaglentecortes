<?php
namespace App\Constants;

class AppConstants
{
  //Common
  public const CREATED_AT = 'created_at';
  public const UPDATED_AT = 'updated_at';
  public const STATUS = 'status';
  public const RESPONSE = 'response';
  public const REQUEST_ERROR = 'A request error occured!';
  public const REQUEST_SUCCESS = 'Request Successful!';


  //Appointments
  public const APPOINTMENT_TABLE = 't_appointment';
  public const APPOINTMENT_ID = 'appointment_id';
  public const FREQUENCY = 'frequency';
  public const START_DATE = 'start_date';
  public const APPLIED_WEEK_DAYS = 'applied_week_days';
  public const APPLIED_DAY_TIME = 'applied_day_time';
  public const SITTER_NOTES = 'sitter_notes';

  //Appointment Values
  public const RECURRING = 'recurring';
  public const ONE_TIME = 'one_time';
  public const FREQUENCY_VALUES = [
    self::RECURRING,
    self::ONE_TIME
  ];
  public const MON = 'mon';
  public const TUE = 'tue';
  public const WED = 'wed';
  public const THU = 'thu';
  public const FRI = 'fri';
  public const SAT = 'sat';
  public const SUN = 'sun';
  public const WEEK_DAYS_VALUES = [
    self::MON,
    self::TUE,
    self::WED,
    self::THU,
    self::FRI,
    self::SAT,
    self::SUN,
  ];
  public const MORNING = 'morning';
  public const AFTERNOON = 'afternoon';
  public const EVENING = 'evening';
  public const DAY_TIME_VALUES = [
    self::MORNING,
    self::AFTERNOON,
    self::EVENING,
  ];
}