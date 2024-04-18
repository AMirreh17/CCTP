import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ThemeProvider, createTheme } from '@mui/material'; // These theme function were imported from the Material UI documentation
import {HashRouter} from 'react-router-dom'; // This function is imported from React Router Dom library. This is used to help react pages navigate correctly through GitHub Pages
import ScrollToTop from './ScrollToTop'; // This function is imported from ScrollToTop.js


const theme = createTheme( // This theme was built from the Material UI documentation. Reference: https://mui.com/material-ui/customization/theming/ , https://mui.com/material-ui/customization/typography/
  {
    palette: {
      
     mode: 'dark'
    },
    typography: {
      h1: {
        fontSize: "3rem",
        fontWeight: 600,
      },
      h2: {
        fontSize: "1.75rem",
        fontWeight: 600,
      },
      h3: {
        fontSize: "1.5rem",
        fontWeight: 600,
      },
     
    }
  }
);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <HashRouter>
    <ScrollToTop />
    <ThemeProvider theme={theme}>
       <App />
    </ThemeProvider>
    </HashRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
