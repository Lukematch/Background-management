import {
  InfoCircleOutlined,
  ProfileOutlined,
  TeamOutlined,
  UserOutlined
} from "@ant-design/icons";
import { Menu, MenuProps } from "antd";
import React, { useState } from "react";
import { useNavigate ,  useLocation } from "react-router-dom";

type MenuItem = Required<MenuProps>['items'][number];

// function getItem(
//   label: React.ReactNode,
//   key: React.Key,
//   icon?: React.ReactNode,
//   children?: MenuItem[],
// ): MenuItem {
//   return {
//     key,
//     icon,
//     children,
//     label,
//   } as MenuItem;
// }
// const items: MenuItem[] = [
//     getItem('Page 1', '/page1', <ProfileOutlined />),
//     getItem('Page 2', '/page2', <ProfileOutlined />),
//     getItem('User', '/user', <UserOutlined />, [
//       getItem('user1', '/user/user1'),
//       getItem('user2', '/user/user2'),
//       getItem('user3', '/user/user3'),
//     ]),
//     getItem('Team', '/team', <TeamOutlined />, [getItem('team1', '/team/team1'), getItem('team2', '/team/team2')]),
//     getItem('About', '/about' , <InfoCircleOutlined />),
//   ];

  const items : MenuItem[] = [
    {
      label:'Page1',
      key:'/page1',
      icon:<ProfileOutlined />
    },
    {
      label:'Page2',
      key:'/page2',
      icon:<ProfileOutlined />
    },
    {
      label:'User',
      key:'/user',
      icon:<UserOutlined />,
      children:[
        {
          label:'User1',
          key:'/user/user1',
        },
        {
          label:'User2',
          key:'/user/user2',
        },
        {
          label:'User3',
          key:'/user/user3',
        },
      ]
    },
    {
      label:'Team',
      key:'/team',
      icon:<TeamOutlined />,
      children:[
        {
          label:'Team1',
          key:'/team/team1',
        },
        {
          label:'Team2',
          key:'/team/team2',
        },
      ]
    },
    {
      label:'About',
      key:'/about',
      icon:<InfoCircleOutlined />
    }
  ]
  const MainMenu: React.FC = ()=> {
    let firstOpenKey:string = ""
    const currentRoute = useLocation()
    for(let i = 0;i<items.length;i++){
      // 判断是否能找到children中的path
      if(items[i]!['children'] && items[i]!['children'].length>=1 && items[i]!['children'].find(findKey)){
          firstOpenKey=items[i]!.key as string;
          console.log(items[i]!.key);
          break;
      }
    }
    const [openKeys, setOpenKeys] = useState([firstOpenKey]);
    const useNavigateTo = useNavigate()

    const menuClick = (e:{key:string})=>{
        // console.log(e.key)
        useNavigateTo(e.key)
      }
    const handleOpenChange = (keys:string[])=>{
        // keys记录了当前展开的菜单
        // 将数组修改为最后一项
        setOpenKeys([keys[keys.length-1]])
        // console.log(keys);
      }
      function findKey(obj:{key:string}){
        return obj.key === currentRoute.pathname
      }
    return(
        <Menu
            theme="dark"
            // 当前样式所在选中项(key)
            defaultSelectedKeys={[currentRoute.pathname]}
            mode="inline"
            items={items}
            onClick={menuClick}
            // 某项菜单展开回收的事件
            onOpenChange={handleOpenChange}
            // 当前展开项的key输出
            openKeys={openKeys}
        />
    )
}
  export default MainMenu
