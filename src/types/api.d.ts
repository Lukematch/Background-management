//定义请求、响应参数的类型

//验证码的响应类型约束
interface CaptchaAPIRes{
    msg:string;
    img:string;
    code:number;
    captchaEnabled:bollean;
    uuid:string;
}
// 登录请求参数类型约束
interface LoginAPIReq{
    username:string;
    password:string;
    code:string;
    uuid:string;
}
// 登录响应参数类型约束
interface LoginAPIRes{
    msg:string;
    code:number;
    token:string;
}