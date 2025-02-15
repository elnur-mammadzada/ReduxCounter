import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    value: 0,
}





export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: (state) => {
            state.value = state.value + 1;
        },
        decrement: (state) => {
            state.value = state.value - 1;
        },


        customValue: (state, action) => {

            state.value = action.payload


        },


    }
})
export const { increment, decrement, customValue } = counterSlice.actions
export const selectCount = (state) => state.counter.value

export default counterSlice.reducer