import { Experimental_CssVarsProvider } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import React from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.jsx'
import theme from './theme.js';


createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Experimental_CssVarsProvider theme={theme}>
      <CssBaseline />
      <App />
    </Experimental_CssVarsProvider>
  </React.StrictMode>,
)
