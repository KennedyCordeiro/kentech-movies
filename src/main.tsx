import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { MantineProvider } from '@mantine/core';
import { createTheme } from '@mantine/core';

const theme = createTheme({
  colors: {
    dark: [
      '#16161A', // background
      '#94A1B2', // paragraph
      '#FFFFFE', // text-button
      '#7F5AF0', // button
    ],
  },
  fonts: {
    heading: 'Euclid Circular A, sans-serif',
    body: 'Poppins, sans-serif',
  },
});


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
       <MantineProvider theme={theme} defaultColorScheme="dark"> 
    <App />
    </MantineProvider>
  </React.StrictMode>,
)
