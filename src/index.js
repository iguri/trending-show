import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './index.scss';
import App from './App';

import { createRoot } from 'react-dom/client';

const root = createRoot(document.getElementById("root"));

root.render(<>
  <BrowserRouter>
    <App />
  </BrowserRouter>
</>);
