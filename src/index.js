import React from 'react';

import {createRoot}from 'react-dom/client';
import AppRouter from './router/AppRouter';


import  './index.css'
import  reportWebVitals from './reportWebVitals';

const root = createRoot(document.getElementById('root'));
root.render(<AppRouter />, );


 reportWebVitals();
