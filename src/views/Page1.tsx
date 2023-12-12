import { Button, Input } from "antd"
import { ChangeEvent, useEffect, useState } from "react"
import handleNum from "../store/NumStatus"
import { useDispatch, useSelector } from "react-redux"

const Page1 = () => {
    const [a,setA] = useState(0)

    // 使用redux，获取仓库数据
    const dispatch = useDispatch()
    // TS提供了ReturnType来获取仓库数据
    // 全局types/store.ts声明num
    const {num,sarr} = useSelector((state:RootState)=>({
        num:state.handleNumReducer.num,
        sarr:state.handleArrReducer.sarr
    }))
    const inputNum = (e:ChangeEvent<HTMLInputElement>)=>{
        const inputValue = parseInt(e.target.value,10);
        setA(inputValue)
    }
    useEffect(()=>{
        console.log("a:"+a);
    },[a])
    const changeNum = ()=>{
        dispatch(handleNum.asyncAction.asyncAdd1)
    }
    const changeNum1 = ()=>{
        dispatch({type:"add1"})
    }
    const changeNum2 = ()=>{
        dispatch({type:"add2"})
    }
    const changeNum3 = ()=>{
        dispatch({type:"addNum",value:a})
    }
    return(
        <div className="home">
            <p>这是Page1组件</p>
            <span>num:{num}-来自NumStatus模块</span>
            <br></br>
            <Button
            onClick={changeNum}
            >
            1s后加1(异步)
            </Button>
            <br></br>
            <Button
            onClick={changeNum1}
            >
            +1
            </Button>
            <br></br>
            <Button
            onClick={changeNum2}
            >
            +2
            </Button>
            <br></br>
            <span>输入数字进行add:</span>
            <br></br>
            <Input
            placeholder="输入一个数字" onChange={inputNum}
            value={a}
            className="Input"
            />
            <br></br>
            <Button
            onClick={changeNum3}
            >
            add
            </Button>
            <br></br>
            <span>sarr:{sarr}-来自ArrStatus模块</span>
        </div>
    )
}

export default Page1