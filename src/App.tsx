// import Component1 from "@/components/Component1"
// import Component2 from "@/components/Component2"
// import { Outlet , Link } from "react-router-dom"
import { useRoutes } from "react-router-dom"
import router from "./router"

function App() {
  const outlet = useRoutes(router)
  return (
    <div className='App'>
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
      {outlet}
    </div>
  )
}

export default App
