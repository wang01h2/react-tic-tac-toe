import React from 'react'
import ReactDOM from 'react-dom/client' // 将虚拟dom渲染到文档中变成真实dom
import App from './App'
import './index.css'
import {RecoilRoot, atom, selector, useRecoilState, useRecoilValue, useSetRecoilState} from 'recoil'// 引入Recoil

const Root = ReactDOM.createRoot(document.querySelector('#root'))

Root.render(
  // 严格模式只在开发环境生效 不会渲染可见UI
  <React.StrictMode>
    <App/>
  </React.StrictMode>
)
