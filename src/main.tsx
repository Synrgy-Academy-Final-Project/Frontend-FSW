// main.tsx
import React from 'react';
import ReactDOM from 'react-dom';
import LoginAdmin from './LoginAdmin.tsx';
import RegisterUser from "./RegisterUser.tsx";
// import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RegisterUser />
  </React.StrictMode>,
);
