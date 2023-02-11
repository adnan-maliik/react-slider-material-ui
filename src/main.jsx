import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import UiThemeProvider from './components/Ui/UiThemeProvider'
import './css/index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UiThemeProvider>
         <App /> 
    </UiThemeProvider>
  </React.StrictMode>,
)
