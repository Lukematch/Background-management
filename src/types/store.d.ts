// TS提供了ReturnType来获取仓库数据
type RootState = ReturnType<typeof import("@/store").getState>
// 全局声明函数类型
interface Window{
  __REDUX_DEVTOOLS_EXTENSION__:function;
  __REDUX_DEVTOOLS_EXTENSION_COMPOSE__:function;

}