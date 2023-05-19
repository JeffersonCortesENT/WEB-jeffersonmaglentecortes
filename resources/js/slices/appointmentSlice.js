import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { saveAppointment } from '../requests/appointmentRequests';
import Swal from 'sweetalert2';
import { showError, showSuccess } from '../alerts/alerts';

const initialState = {
    oAppointmentForm: {
      frequency: 'recurring',
      start_date: '',
      applied_week_days: [],
      applied_day_time: [],
      sitter_notes: ''
    }
};

export const createAppointment = createAsyncThunk(
  'appointment/createAppointment',
  async (oParams) => {
      const oResponse = await saveAppointment(oParams);
      return oResponse.data;
  }
);

export const appointmentSlice = createSlice({
    name: 'appointment',
    initialState,
    reducers: {
        handleFormChange: (state, action) => {
            const { name, value } = action.payload;
            state.oAppointmentForm[name] = value;
        },
        handleCheckboxChange: (state, action) => {
          const { name, value } = action.payload;
          let aTempField = state.oAppointmentForm[name];
          if (aTempField.includes(value) === false) {
            aTempField.push(value);
            state.oAppointmentForm[name] = [...aTempField];
          } else {
            let iIndex = aTempField.findIndex( sDay => sDay === value );
            if (iIndex !== -1) {
              aTempField.splice(iIndex, 1);
            }
            state.oAppointmentForm[name] = [...aTempField];
            }
        },
    },
    extraReducers: (builder) => {
      builder
        .addCase(createAppointment.fulfilled, (state) => {
          state.oAppointmentForm = {
            frequency: 'recurring',
            start_date: '',
            applied_week_days: [],
            applied_day_time: [],
            sitter_notes: ''
          };
          showSuccess();
        })
        .addCase(createAppointment.rejected, (state, action) => {
          showError(action.error.message);
        })
    }
});

export const {
    handleFormChange,
    handleCheckboxChange,
} = appointmentSlice.actions;

export const selectAppointmentForm = (state) => state.appointment.oAppointmentForm;

export default appointmentSlice.reducer;
