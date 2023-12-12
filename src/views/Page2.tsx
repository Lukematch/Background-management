import { useSelector } from "react-redux"

const Page2 = () => {

    const {sarr,num} = useSelector((state:RootState)=>({
        sarr:state.handleArrReducer.sarr,
        num:state.handleNumReducer.num
    }))
    return(
        <div className="home">
            <p>这是Page2组件</p>
            <br></br>
            <span>sarr:{sarr}-来自ArrStatus模块</span>
            <br></br>
            <span>num:{num}-来自NumStatus模块</span>
        </div>
    )
}

export default Page2