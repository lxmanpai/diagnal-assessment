import { configureStore } from "@reduxjs/toolkit"
import showsReducer from "../reducers/showsSlice"

export default configureStore({
  reducer: {
    shows: showsReducer,
  },
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware({
      immutableCheck: false,
      serializableCheck: false,
    }),
  ],
})
