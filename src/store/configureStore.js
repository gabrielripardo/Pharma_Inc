import { configureStore } from "@reduxjs/toolkit";
// import logger from 'redux-logger'
import reducer from "./patients";
import api from "./middleware/api";

export default function store() {
    return configureStore({
        reducer,
        middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(api),
    });
}