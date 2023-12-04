// 全局引入方式，会对别的组件造成影响
// import "./component.scss"

//模块化引入(不会对别的组件造成影响)
import styles from "./component.module.scss"
import { Button } from 'antd';
import { EnterOutlined  } from "@ant-design/icons";

const Component1 = () => {
    return(
        <div>
            <span className={styles.box}>这是Component1的内容</span>
            <br></br>
            <span className="box">这是Component1的其他内容</span>
            <br></br>
            <Button
            type="primary">
            Antd
            </Button>
            <EnterOutlined
            style={{
                fontSize:'20px',color:'red'
            }}
            />
        </div>
    )
}

export default Component1