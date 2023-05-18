<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use App\Constants\AppConstants;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
      Schema::create(AppConstants::APPOINTMENT_TABLE, function (Blueprint $table) {
          $table->integer(AppConstants::APPOINTMENT_ID, 11);
          $table->enum(AppConstants::FREQUENCY, ['resuming','one_time']);
          $table->date(AppConstants::START_DATE);
          $table->string(AppConstants::APPLIED_WEEK_DAYS, 30);
          $table->string(AppConstants::APPLIED_DAY_TIME, 30);
          $table->text(AppConstants::SITTER_NOTES);
        });
      }
    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('t_appointment');
    }
};
