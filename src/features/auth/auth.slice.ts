import { createSlice } from "@reduxjs/toolkit";
import { ArgLoginType, ArgRegisterType, authApi, ProfileType, TChangeUser } from "features/auth/auth.api";
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
      .addCase(logout.fulfilled, (state, action) => {
        state.isLoggedIn = action.payload.isLoggedIn
      })
  }
});

const authMe = createAppAsyncThunk<{ profile: ProfileType }, void>("auth/me", async () => {
  const res = await authApi.authMe();
  return { profile: res };
});

const login = createAppAsyncThunk<{ profile: ProfileType }, ArgLoginType>
("auth/login", async (arg) => {
  const res = await authApi.login(arg);
  return { profile: res.data };
});


const register = createAppAsyncThunk<boolean, ArgRegisterType>
('auth/register', async (arg, { rejectWithValue }) => {
  try {
    await authApi.register(arg)
    return true
  } catch (e) {
    return rejectWithValue(null)
  }

const changeUserData = createAppAsyncThunk<{ profile: ProfileType }, TChangeUser>
("auth/changeUser", async (arg) => {
  const res = await authApi.changeUser(arg);
  return { profile: res.updatedUser };
});

const logout = createAppAsyncThunk<{isLoggedIn: boolean}, void >
("auth/logout", async () => {
  await authApi.logout();
  return {isLoggedIn: false}
});

})

export const authReducer = slice.reducer;
export const authThunks = { authMe, register, login, changeUserData, logout };