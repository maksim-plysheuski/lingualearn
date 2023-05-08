import { createSlice } from "@reduxjs/toolkit";
import { ArgLoginType, ArgRegisterType, authApi, ProfileType, TChangeUser, TUpdatedUser } from "features/auth/auth.api";
import { createAppAsyncThunk } from "common/utils/createAppAsyncThunk";


const slice = createSlice({
  name: "auth",
  initialState: {
    profile: null as ProfileType | null,
    isLoggedIn: false as boolean
  },
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(authMe.fulfilled, (state, action) => {
        state.profile = action.payload.profile;
        state.isLoggedIn = true;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.profile = action.payload.profile;
        state.isLoggedIn = true;
      })
      .addCase(changeUserData.fulfilled, (state, action) => {
        state.profile = action.payload.profile;
      })
  }
});

const authMe = createAppAsyncThunk<{ profile: ProfileType }, void>("auth/me", async () => {
  const res = await authApi.authMe()
  return {profile: res}
})

const login = createAppAsyncThunk<{ profile: ProfileType }, ArgLoginType>
("auth/login", async (arg) => {
  const res = await authApi.login(arg);
  return { profile: res.data };
});

const register = createAppAsyncThunk<void, ArgRegisterType>
("auth/register", async (arg) => {
  await authApi.register(arg);
});

const changeUserData = createAppAsyncThunk<any, any>
("auth/changeUser", async (arg) => {
    const res = await authApi.changeUser(arg);
    return {profile: res.updatedUser}
});




export const authReducer = slice.reducer;
export const authThunks = { authMe, register, login, changeUserData };