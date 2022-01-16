import React from 'react'
import ReactDOM from 'react-dom'
import Provider from './redux/Provider'
import { BrowserRouter } from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.min.css'
import './ui/assets/styles/main.scss'
import App from './App'

ReactDOM.render(
  <React.StrictMode>
    <Provider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)
