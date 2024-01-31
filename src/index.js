import React from "react"
import { Provider } from "react-redux"
import ReactDOM from "react-dom/client"

import store from "./app/store"
import App from "./App"
import reportWebVitals from "./reportWebVitals"

import "./index.scss"

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <React.StrictMode>
    {/* Provide the store to all the child components */}
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
)

reportWebVitals()
