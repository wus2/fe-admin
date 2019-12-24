import * as localforage from "localforage";
import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { createLogger } from "redux-logger";
import { persistReducer, persistStore } from "redux-persist";
import thunk from "redux-thunk";
import rootReducer from "reduxs/index";

const persistConfig = {
    key: "auth",
    version: 1,
    storage: localforage,
    blacklist: [],
};

const logger = (createLogger)();

const dev = process.env.NODE_ENV === "development";

let middleware = dev ? applyMiddleware(logger, thunk) : applyMiddleware(thunk);

if (dev) {
    middleware = composeWithDevTools(middleware);
}

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default () => {

    const store = createStore(persistedReducer, {}, middleware);

    const persistor = persistStore(store);

    return { store, persistor };
};

