// import Component1 from "@/components/Component1"
// import Component2 from "@/components/Component2"
// import { Outlet , Link } from "react-router-dom"
import { useRoutes } from "react-router-dom"
import router from "./router"
// import { useEffect } from "react"
// import { message } from "antd"


// // 去登录页
// function ToLogin(){
//   const navigateTo = useNavigate()
//   useEffect(()=>{
//     navigateTo("/login");
//     message.warning('您还没有登录！');
//   },[])
//   return<div></div>
// }
// // 去主页
// function ToPage1(){
//   const navigateTo = useNavigate()
//   // 加载完组件执行
//   useEffect(()=>{
//     navigateTo("/page1");
//     message.warning('您已经登录！');
//   },[])
//   return<div></div>
// }
// function BeforeRouterEnter(){
//   const outlet = useRoutes(router)
//   // React没有路由守卫,手写拦截
//   // 1.访问登录页，且验证通过，跳转到首页
//   // 2.访问的不是登录页，跳转到登录页
//   const location = useLocation()
//   if(location.pathname==="/login"){
//     console.log(location.pathname);
//     return <ToPage1/>
//   }
//   if(location.pathname!=="/login"){
//     return <ToLogin/>
//   }
//   return outlet
// }
function App() {
  const outlet = useRoutes(router)
  return (
    <div className="App">
      {/* component:
      <Component1/>
      <Component2/> */}
      {/* <Link to="/home">Home</Link>
      <br></br>
      <Link to="/about">About</Link>
      <br></br>
      <Link to="/user">User</Link> */}
      {/* 占位符组件，类似于窗口，像Vue中的router-view */}
      {/* <Outlet></Outlet> */}
      {/* <BeforeRouterEnter/> */}
      {outlet}
    </div>
  )
}

export default App
