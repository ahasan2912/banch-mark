import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import authReducer from "../features/auth/authSlice";
import targetReducer from "../features/target/targetSlice";
import eventReducer from "../features/event/eventSlice";
import apiSlice from "../features/api/apiSlice";

const persistConfig = {
    key: "root",
    storage,
    whitelist: ["auth"],
};

const rootReducer = combineReducers({
    auth: authReducer,
    target: targetReducer,
    event: eventReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }).concat(apiSlice.middleware),
});

export const persistor = persistStore(store);