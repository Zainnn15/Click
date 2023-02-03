import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import reducer from "./reducer";
import logger from "./middleware/logger";
import toast from "./middleware/toast";
import {api} from "./middleware/api";
//import {authApi } from "../api/api"
export default function() {
  return configureStore({
    reducer,
    middleware: [
      ...getDefaultMiddleware(),
      //logger({ destination: "console" }),
      //toast,
      api.middleware
    ]
  });
}
