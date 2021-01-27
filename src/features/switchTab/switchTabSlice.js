import { createSlice } from '@reduxjs/toolkit';
export const switchTabSlice = createSlice({
    name: "switchTab",
    initialState: {
        tabId: 0
    },
    reducers: {
        switchTab: (state, action) => {
            state.tabId = action.payload.tabId;
        }
    }
})
export const { switchTab } = switchTabSlice.actions;
export const selectTabId = state => state.switchTab.tabId;
export default switchTabSlice.reducer;