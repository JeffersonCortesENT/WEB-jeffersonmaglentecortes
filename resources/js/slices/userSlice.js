import { createSlice, createAsyncThunk, current } from '@reduxjs/toolkit';
import { fetchUsers, saveUserData } from '../requests/userRequests';

const initialState = {
    aUsers: [],
    oRegistrationForm: {
      full_name: '',
      email_address: '',
      birth_date: '',
      password: '',
    }
};

export const getUsersList = createAsyncThunk(
    'user/getUsersList',
    async (oParams, { dispatch }) => {
        const oResponse = await fetchUsers(oParams);
        return oResponse.data
    }
);

export const saveUser = createAsyncThunk(
  'user/saveUser',
  async (oParams) => {
      const oResponse = await saveUserData(oParams);
      return oResponse.data;
  }
);

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        handleFormChange: (state, action) => {
            const { name, value } = action.payload
            state.oRegistrationForm[name] = value;
        },
    },
    extraReducers: (builder) => {
      builder
        .addCase(getUsersList.fulfilled, (state, action) => {
          state.aUsers = action.payload;
        })
        .addCase(saveUser.fulfilled, () => {
          alert('Registration Successful!');
        })
        .addCase(saveUser.rejected, () => {
          alert('Registration Failed! An error occured.');
        })
    }
});

export const {
    handleFormChange,
} = userSlice.actions;

export const selectUsers = (state) => state.user.aUsers;
export const selectUserForm = (state) => state.user.oRegistrationForm;


export default userSlice.reducer;
