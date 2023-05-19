import axios from "axios";

/**
 * Function for saving appointment
 * @param oQuery
 * @return {Promise<AxiosResponse<T>>}
 */
export const saveAppointment = aData => {
  return axios.post('/save-appointment', aData);
};

