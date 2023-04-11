import { createSlice } from '@reduxjs/toolkit'


const INITIAL_TILES_DATA = [
    {
        t: 'Data Maintenance Application (DMA)'
    }, 
    {
        t: 'Generic Resource'
    },
    {
        t: 'Head Words'
    },
    {
        t: 'Legit Words'
    },
    {
        t: 'Reports'
    },
    {
        t: 'Rule Set Authoring'
    },
    {
        t: 'Stop Words'
    },
    {
        t: 'Tree Code View'
    }
];

export const tilesSlice = createSlice({
  name: 'tiles',
  initialState: {
    data: INITIAL_TILES_DATA,
  },
  reducers: {
    // increment: (state) => {
    //   // Redux Toolkit allows us to write "mutating" logic in reducers. It
    //   // doesn't actually mutate the state because it uses the Immer library,
    //   // which detects changes to a "draft state" and produces a brand new
    //   // immutable state based off those changes
    //   state.value += 1
    // },
    // decrement: (state) => {
    //   state.value -= 1
    // },
    // incrementByAmount: (state, action) => {
    //   state.value += action.payload
    // },
  },
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = tilesSlice.actions

export default tilesSlice.reducer