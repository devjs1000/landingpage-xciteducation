import { StrictMode } from "react";
import { render } from "react-dom";
import "./index.css";
import "./global.css";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import MainContext from "./context/mainContext";
import store from './redux/reducers/store'
import {Provider} from 'react-redux'

render(
  <StrictMode>
    <BrowserRouter>
      <MainContext>
        <Provider store={store}>
        <App />

        </Provider>
      </MainContext>
    </BrowserRouter>
  </StrictMode>,
  document.getElementById("root")
);
