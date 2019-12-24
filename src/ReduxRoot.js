import * as React from 'react';
import { Typography } from "@material-ui/core";
import { Provider } from 'react-redux';
import App from './App';
import configureStore from './configureStore';
import { PersistGate } from "redux-persist/integration/react";

const { persistor, store } = configureStore();

function ReduxRoot() {
  return (
    <Provider store={store}>
      <PersistGate
        loading={<Typography>Loading...</Typography>}
        persistor={persistor}
      >
        <App />
      </PersistGate>
    </Provider>
  );
}

export default ReduxRoot;
