import { createSlice, current, PayloadAction } from "@reduxjs/toolkit";


const appInitialState = {
  error: null as string | null,
  isLoading: true,
  isAppInitialized: false,
  users: []
};

type InitialStateType = typeof appInitialState

const slice = createSlice({
  name: "app",
  initialState: appInitialState,
  reducers: {
    setIsLoading: (state, action: PayloadAction<{isLoading: boolean}>) => {
      state.isLoading = action.payload.isLoading;
    },
  }
});

export const appReducer = slice.reducer;
export const appActions = slice.actions
