import { configureStore } from "@reduxjs/toolkit"
import showsReducer from "../reducers/showsSlice"

// Store configuration which combines different slices into a single state
export default configureStore({
  reducer: {
    shows: showsReducer,
  },
  // Middleware configurations
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware({
      immutableCheck: false,
      serializableCheck: false,
    }),
  ],
})
