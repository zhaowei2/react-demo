import React from 'react';
import { Badge } from 'antd'
class Aside extends React.Component {
  // constructor(props) {
  //   super(props);
  // }
  render(){
    return (
      <div style={{height:90}}>
        <div>
          <img style={{height:50,marginTop:20,marginLeft:30,marginRight:'21px',float:'left'}} src="./../imgs/logo.17ed988.png" alt="logo" />
          <span style={{float: 'left',marginTop: 30,paddingLeft: 19,borderLeft:'1px solid #d7d7d7', lineHeight: '20px', fontSize: 18}}>企业管理系统</span> 
          <div style={{float :'right' ,height :42 ,marginTop:24 ,marginRight:40}}>
              <div style={{float:'left',marginRight:40,height:'100%'}}>
                <Badge 
                count={99}>
                  <span className="head-example"
                    style={{
                      float:'left', width:36 , height:36 ,borderRadius: '50%' ,lineHeight:'36px',boxShadow: '0px 0px 5px 0px rgba(41, 33, 0, 0.2)',
                      background:'url(./../imgs/notice_nor.png) center center / 21px 17px no-repeat'
                    }}
                  ></span>
                </Badge>

              </div>
              <div className="welcome"> 
                  <img  src="./../imgs/avatar.png" alt="头像"/>
                  <span className="welcome__user-text">您好，陈壹千—抖技昵称</span>
              </div>
              <div
                style={{
                  float:'left'
                }}
              >
                <div 
                  style={{
                    float:'left', width:36 , height:36 ,borderRadius: '50%' ,lineHeight:'36px',boxShadow: '0px 0px 5px 0px rgba(41, 33, 0, 0.2)',
                    background:'url(./../imgs/out.png) center center / 21px 17px no-repeat',marginRight:'10px'
                  }}>
                </div>
                <div
                  style={{float:'left',lineHeight:'42px'}}
                  >
                  退出
                </div>
              </div>
             
          </div> 
        </div> 
      </div>
    )
  }
}
export default Aside