import handleArr from "./index"
const defaultState={
    // num:20
    // num:handleNum.state.num
    //解构
    ...handleArr.state,
}
//Vuex此处带封装
//react-redux手动封装...
let reducer = (state = defaultState,action:string)=>{
    let newState = JSON.parse(JSON.stringify(state))
    // switch(action){
    //     case handleArr.sarrpush:
    //         handleArr.actions[handleArr.sarrpush](newState,action)
    //         break;
    // }
    for(let key in handleArr.actionNames){
        if(action===handleArr.actionNames[key]){
            handleArr.actions[handleArr.actionNames[key]](newState,action)
        }
    }
    return newState
}

export default reducer