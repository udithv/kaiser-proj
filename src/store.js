import { configureStore } from '@reduxjs/toolkit'
import tilesReducer from './features/tiles/tilesSlice'

export default configureStore({
  reducer: {
    tiles: tilesReducer
  },
})