const store= {
    state:{
    // 数据
    },
    actions:{
    // 同步方法
    },
    asyncAction:{
    // 异步方法(相当于Vue的Commit)
    },
    actionNames:{}
}
let actionsNames = {}
for(let key in store.actions){
    actionsNames[key] = key
}
store.actionNames = actionsNames
export default store