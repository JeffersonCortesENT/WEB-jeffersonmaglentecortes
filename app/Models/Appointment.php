<?php

namespace App\Models;

use App\Constants\AppConstants;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Appointment extends Model
{
    use HasFactory;

    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 't_appointment';

    /**
     * The primary key associated with the table.
     *
     * @var string
     */
    protected $primaryKey = 'appointment_id';

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
      AppConstants::FREQUENCY,
      AppConstants::START_DATE,
      AppConstants::APPLIED_WEEK_DAYS,
      AppConstants::APPLIED_DAY_TIME,
      AppConstants::SITTER_NOTES,
  ];
}
