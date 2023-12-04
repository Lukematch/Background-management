import App from "@/App";
import Home from "@/views/Home";
import About from "@/views/About";
import { Routes , BrowserRouter , Route } from "react-router-dom";
// 路由的两种模式的组件：History/Hash
// BrowserRouter为History模式
// HashRouter为Hash模式

// 下面组件为简写，当只有return 没有其他逻辑时可以直接使用小括号，省略花括号和return
const baseRouter = () => (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App/>}>
                <Route path="/home" element={<Home/>}></Route>
                <Route path="/about" element={<About/>}></Route>
            </Route>
        </Routes>
    </BrowserRouter>
)
export default baseRouter