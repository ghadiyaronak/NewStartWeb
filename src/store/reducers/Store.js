import { configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import logger from "redux-logger";
import rootReducer from "../../store/reducers/RootReducer.js";

const rootPersistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(rootPersistConfig, rootReducer);

const Store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(logger),
});

const persistor = persistStore(Store);

export { persistor };
export default Store;
