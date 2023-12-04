import React from 'react'
import ReactDOM from 'react-dom/client'
// 样式初始化引入
import "reset-css"
// UI框架样式引入

// 全局样式
import "@/assets/styles/global.scss"
// 组件样式引入
import App from './App'


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
