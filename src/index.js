// import React from "react";
// import ReactDOM from "react-dom";
// import "./index.css";
// import App from "./App";
// import reportWebVitals from "./reportWebVitals";
// import { Provider } from "react-redux";
// import { store } from "./redux/store";
// import { BrowserRouter } from "react-router-dom";
// // import { store, persistor } from "./redux/store";
// // import { PersistGate } from "redux-persist/integration/react";
// // import axios from "axios"

// // axios.defaults.withCredentials = true;

// ReactDOM.render(
//   <React.StrictMode>
//     <Provider store={store}>
//     {/* <PersistGate loading={null} persistor={persistor}> */}
//       <BrowserRouter>
//           <App />
//       </BrowserRouter>
//    {/* </PersistGate> */}
//     </Provider>
//   </React.StrictMode>,
//   document.getElementById("root")
// );

// reportWebVitals();


import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import App from './App';
import { store, persistor } from './redux/store';
// import 'modern-normalize/modern-normalize.css';
// import './styles/base.css';


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);