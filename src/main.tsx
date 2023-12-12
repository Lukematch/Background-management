// import React from 'react'
import ReactDOM from 'react-dom/client'
// 样式初始化引入
import "reset-css"
// UI框架样式引入

// 全局样式
import "@/assets/styles/global.scss"
// 组件样式引入
import App from '@/App'
// import Router from "./router"
import { BrowserRouter } from 'react-router-dom'
// 状态管理
import { Provider } from 'react-redux'
import store from '@/store'

ReactDOM.createRoot(document.getElementById('root')!).render(
  // <React.StrictMode>
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
  // </React.StrictMode>,

)
