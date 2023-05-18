import axios from "axios";

/**
 * Function responsible for fetching Influencers
 * @param oQuery
 * @return {Promise<AxiosResponse<T>>}
 */
export const fetchUsers = oQuery => {
    return axios.get('/get-users', {
        params: oQuery
    });
};

/**
 * Function responsible for fetching Influencers
 * @param oQuery
 * @return {Promise<AxiosResponse<T>>}
 */
export const saveUserData = aData => {
  return axios.post('/save-user', aData);
};

