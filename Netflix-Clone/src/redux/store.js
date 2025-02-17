import {configureStore} from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import movieReducer from "./movieSlice";
import searchSlice from "./searchSlice";

const store = configureStore({
    reducer:{
        app:userReducer,
        movie:movieReducer,
        searchMovie:searchSlice
    }
});
export default store;







// Redux is a state management library for JavaScript applications.
// It is commonly used with React to manage application-wide state.
// Redux helps in managing global state in a predictable way.
// It follows the Flux architecture, which consists of:
// Store → Centralized state
// Actions → Describes what happened
// Reducers → Modifies the state based on actions
// Dispatch → Sends actions to reducers


// Redux Toolkit (RTK) is the recommended way to use Redux in modern applications.
// It simplifies Redux by providing built-in utilities.
// It helps in writing less boilerplate code.
// Features of Redux Toolkit:
// createSlice: Creates actions and reducers together.
// configureStore: Simplifies store configuration.
// createAsyncThunk: Handles asynchronous actions.
// Built-in Middleware: Like Redux Thunk.