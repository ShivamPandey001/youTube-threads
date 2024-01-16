import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./appSlice";
import chatSlice from "./chatSlice";
import searchSlice from "./searchSlice";

const appStore = configureStore({
    reducer : {
        app: appSlice,
        search:  searchSlice,
        chat : chatSlice
    }
})

export default appStore;