import handleNum from "./index"
const defaultState={
    // num:20
    // num:handleNum.state.num
    //解构
    ...handleNum.state,
}
//Vuex此处带封装
//react-redux手动封装...
let reducer = (state = defaultState,action:{type:string,value:number})=>{
    let newState = JSON.parse(JSON.stringify(state))

    // switch(action.type){
    //     case handleNum.add1:
    //         handleNum.actions[handleNum.add1](newState)
    //         break;
    //     case handleNum.add2:
    //         handleNum.actions[handleNum.add2](newState)
    //         break;
    //     case handleNum.addNum:
    //         handleNum.actions[handleNum.addNum](newState,action)
    //         break;
    // }

    //action.type与actionNames进行对比，相等就调用 模块名.actions[下标](newState,action)
    for(let key in handleNum.actionNames){
        if(action.type===handleNum.actionNames[key]){
            handleNum.actions[handleNum.actionNames[key]](newState,action)
        }
    }

    return newState
}

export default reducer