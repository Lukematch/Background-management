const store= {
    // 数据方法模块化
    state:{
        num:20
    },
    // actions只放同步方法
    actions:{
        add1(newState:{num:number}){
            newState.num++
        },
        add2(newState:{num:number}){
            newState.num+=2
        },
        addNum(newState:{num:number},action:{type:"addNum";
        value:number}){
            newState.num+=action.value
        }
    },
    // 放异步方法(相当于Vue的Commit)
    asyncAction:{
        asyncAdd1(dispatch:Function){
            setTimeout(()=>{
                dispatch({type:"add1"})
            },1000)
        }
    },
    // 名字统一管理
    actionNames:{}
}
let actionsNames = {}
for(let key in store.actions){
    actionsNames[key] = key
}
store.actionNames = actionsNames
export default store