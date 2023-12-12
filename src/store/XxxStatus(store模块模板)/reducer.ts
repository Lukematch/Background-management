import store from "./index"
const defaultState={
    ...store.state,
}
//Vuex此处带封装
//react-redux手动封装...
let reducer = (state = defaultState,action:{type:string,value:number})=>{
    let newState = JSON.parse(JSON.stringify(state))
    //action.type与actionNames进行对比，相等就调用 模块名.actions[下标](newState,action)
    for(let key in store.actionNames){
        if(action.type===store.actionNames[key]){
            store.actions[store.actionNames[key]](newState,action)
        }
    }

    return newState
}

export default reducer