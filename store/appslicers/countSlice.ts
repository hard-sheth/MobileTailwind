import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  count: 0,
  customNo: 1,
};

type countState = {
  count: number;
  customNo: number;
};

const reducers = {
  increaseCount(state: countState) {
    state.count = state.count + state.customNo;
  },
  decreaseCount(state: countState) {    
    state.count = state.count - state.customNo;
  },
  changeCustomNo(state: countState, action: any) {
    state.customNo = action.payload;
  },
  clearCount() {
    return initialState;
  },
};

export const countSlice = createSlice({
  name: 'Count',
  initialState,
  reducers,
});

export const {changeCustomNo, clearCount, decreaseCount, increaseCount} = countSlice.actions

export default countSlice.reducer;
