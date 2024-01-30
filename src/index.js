import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import  AppContextProvider  from "./context/AppContext";
import { ToastContainer } from "react-toastify";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
        <BrowserRouter>
                <AppContextProvider>
                        <ToastContainer></ToastContainer>
                        <App />
                </AppContextProvider>
        </BrowserRouter>
  

);
