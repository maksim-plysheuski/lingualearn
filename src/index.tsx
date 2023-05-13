import React from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import { store } from 'app/store'
import reportWebVitals from './reportWebVitals'
import 'index.scss'
import { RouterProvider } from 'react-router-dom'
import { router } from 'common/router'


const container = document.getElementById('root')!
const root = createRoot(container)

root.render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
)


reportWebVitals()
