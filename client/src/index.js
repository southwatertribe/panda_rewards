import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

//redux stuff
import {store} from './redux/store/store';
import {Provider} from 'react-redux';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';

let persistor = persistStore(store);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
    <Provider store={store}>
      <PersistGate persistor={persistor}>
         <App />
      </PersistGate>
    </Provider>
  
);
