const store = {
    // 数据方法模块化
    state:{
        sarr:[10,20,30]
    },
    actions:{
        sarrpush(newState:{sarr:number[]},action:{type:string;
        value:number}){
            newState.sarr.push(action.value)
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