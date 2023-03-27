import './index.css';
// import { Button } from 'antd'
import { EllipsisOutlined } from '@ant-design/icons';
import { useState } from 'react'

const MyCard = (props) => {
  const { title, children, headerHeight } = props;

  const [mark, setMark] = useState(false);

  return (
    <div className="card" >
      <div className="header" style={{ height: headerHeight }}>
        <span>{title}</span>
        <EllipsisOutlined onClick={()=>setMark(!mark)} />
      </div>
      <div className="context">
        course infomation
        <div>
          {children}
          {/* {mark?<div>
            <Button>edit</Button>
            <Button>delete</Button>
          </div>:null} */}
        </div>
      </div>
    </div>
  );
};
export default MyCard;
