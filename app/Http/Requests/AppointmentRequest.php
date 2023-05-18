<?php

namespace App\Http\Requests;

use App\Constants\AppConstants;
use App\Constants\ValidationConstants;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class AppointmentRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return false;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array|string>
     */
    public function rules(): array
    {

        return [
            AppConstants::FREQUENCY               => [ValidationConstants::REQUIRED, Rule::in(AppConstants::FREQUENCY_VALUES)],
            AppConstants::START_DATE              => [ValidationConstants::REQUIRED, ValidationConstants::DATE],
            AppConstants::APPLIED_WEEK_DAYS       => [ValidationConstants::REQUIRED, ValidationConstants::ARRAY],
            AppConstants::APPLIED_WEEK_DAYS. '.*' => [ValidationConstants::REQUIRED, ValidationConstants::STRING, Rule::in(AppConstants::WEEK_DAYS_VALUES)],
            AppConstants::APPLIED_DAY_TIME        => [ValidationConstants::REQUIRED, ValidationConstants::ARRAY],
            AppConstants::APPLIED_DAY_TIME. '.*'  => [ValidationConstants::REQUIRED, ValidationConstants::STRING, Rule::in(AppConstants::DAY_TIME_VALUES)],
            AppConstants::SITTER_NOTES            => [ValidationConstants::REQUIRED, ValidationConstants::STRING],
        ];
    }
}
