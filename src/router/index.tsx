// import App from "@/App";
import { lazy , Suspense } from "react";
import View from "@/views/View";
import Login from "@/views/Login/index"
// import About from "@/views/About";
// import User from "@/views/User";

// A component suspended while responding to synchronous input. This will cause the UI to be replaced with a loading indicator.
// 懒加载的模式需要添加一个Loading组件
const About = lazy(()=>import("@/views/About"))
const User = lazy(()=>import("@/views/User"))
const Page1 = lazy(()=>import("@/views/Page1"))
const Page2 = lazy(()=>import("@/views/Page2"))
const User1 = lazy(()=>import("@/views/User1"))
const User2 = lazy(()=>import("@/views/User2"))
const User3 = lazy(()=>import("@/views/User3"))
const Team = lazy(()=>import("@/views/Team"))
const Team1 = lazy(()=>import("@/views/Team1"))
const Team2 = lazy(()=>import("@/views/Team2"))
// import { Routes , BrowserRouter , Route , Navigate } from "react-router-dom";
import { Navigate } from "react-router-dom";

const withLoadingComponent = (comp:JSX.Element) => (
    <Suspense fallback={<div>Loading...</div>}>
        {comp}
    </Suspense>
)

// 路由的两种模式的组件：History/Hash
// BrowserRouter为History模式
// HashRouter为Hash模式

// 下面组件为简写，当只有return 没有其他逻辑时可以直接使用小括号，省略花括号和return
// 旧写法（组件式）
// const routes = () => (

//     <BrowserRouter>
//         <Routes>
//             <Route path="/" element={<App/>}>
//                 {/* 配置用户访问“/”重定向到“/home” */}
//                 <Route path="/" element={<Navigate to="/home"/>}></Route>
//                 <Route path="/home" element={<Home/>}></Route>
//                 <Route path="/about" element={<About/>}></Route>
//             </Route>
//         </Routes>
//     </BrowserRouter>
// )
// 新写法（对象式）
const routes = [
    {
        path:"/",
        element:<Navigate to="/login" />
    },
    {
        path:"/",
        element:<View/>,
        children:[
            {
                path:"/page1",
                element: withLoadingComponent(<Page1/>)
            },
            {
                path:"/page2",
                element: withLoadingComponent(<Page2/>)
            },
            {
                path:"/user",
                element: withLoadingComponent(<User/>)
            },
            {
                path:"/user/user1",
                element: withLoadingComponent(<User1/>)
            },
            {
                path:"/user/user2",
                element: withLoadingComponent(<User2/>)
            },
            {
                path:"/user/user3",
                element: withLoadingComponent(<User3/>)
            },
            {
                path:"/team",
                element: withLoadingComponent(<Team/>)
            },
            {
                path:"team/team1",
                element: withLoadingComponent(<Team1/>)
            },
            {
                path:"team/team2",
                element: withLoadingComponent(<Team2/>)
            },
            {
                path:"/about",
                element: withLoadingComponent(<About/>)
            },
        ]
    },
    {
        path:"*",
        element:<Login/>
    },

]

export default routes