import { ChangeEvent, useEffect, useState } from "react"
import {Input, Space , Button, message } from 'antd'
import  style from "./login.module.scss"
import "./login.less"
import initLoginBg from "./init.ts"
import { LoginOutlined } from "@ant-design/icons"
import { useNavigate } from "react-router-dom"
const view = () => {
    let navigateTo = useNavigate()
    // 加载完这个组件后，加载背景
    useEffect(()=>{
        initLoginBg()
        window.onresize = function(){initLoginBg()}
    },[])
    // 获取用户输入的信息
    const [usernameVal,setUsernameVal] = useState("")
    const [passwordVal,setPasswordVal] = useState("")
    const [captchaVal,setCapchaVal] = useState("")

    const usernameChange = (e:ChangeEvent<HTMLInputElement>)=>{
        // console.log(e.target.value);
        setUsernameVal(e.target.value)
        console.log("username:"+usernameVal);
    }
    const passwordChange = (e:ChangeEvent<HTMLInputElement>)=>{
        // console.log(e.target.value);
        setPasswordVal(e.target.value)
        console.log("password:"+passwordVal);
    }
    const captchaChange = (e:ChangeEvent<HTMLInputElement>)=>{
        // console.log(e.target.value);
        setCapchaVal(e.target.value)
        console.log("captcha:"+captchaVal);
    }
    const Login = ()=>{
        // alert(usernameVal+passwordVal+captchaVal)
        console.log("用户登录");
        // 验证是否为空
        if(!usernameVal.trim() || !passwordVal.trim() || !captchaVal.trim()){
            message.warning("请完整输入信息！")
            return
        }
        // 登录请求
        // await LoginAPI({
        // })
        if(usernameVal==='luke' && passwordVal==='123' && captchaVal==='32'){
            message.success('登录成功');
            navigateTo("/page1")
        }else{
            message.error('输入有误！')
        }

    }

    return(
        <div className={style.loginPage}>
            {/* 背景 */}
            <canvas id="canvas" style={{display:"block"}}></canvas>
            {/* 登录盒子 */}
            <div className={style.loginBox+ " loginbox"}>
                {/* 标题 */}
                <div className={style.title}
                >
                    <h1>前端·后台系统</h1>
                    <p>Learning</p>
                </div>
                {/* 表单 */}
                <div className="form">
                    <Space direction="vertical" size="large"
                    style={{ display: 'flex' }}
                    >
                        <Input placeholder="用户名" onChange={usernameChange}/>
                        <Input.Password placeholder="密码" onChange={passwordChange}/>
                        <div className="captchaBox">
                            <Input placeholder="验证码" onChange={captchaChange}/>
                            <div className="captchaImg">
                                <img height="29" src="data:image/gif;base64,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" alt=""/>
                            </div>
                        </div>
                        <Button
                        className={style.loginButton}
                        type="primary"
                        icon={<LoginOutlined />} size="large"
                        shape="round"
                        onClick={Login}
                        >
                            登录
                        </Button>
                    </Space>
                </div>
            </div>
        </div>
    )
}
export default view