import React from 'react';
import { createBrowserRouter } from 'react-router-dom';

import Signin from './pages/Signin';

export default createBrowserRouter([
  {
    path: '/signin',
    element: <Signin />,
  },
]);
