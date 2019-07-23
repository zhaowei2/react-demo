import React from 'react';
import Menu from '../components/menu'
class Sider extends React.Component {
  render() {
    return (
      <div>
        <Menu firstMenu="首页" menuCalss="home"/>
        <Menu firstMenu="商品管理" secondMenu={['商品列表','发布商品']} path="/index/income" menuCalss="commodity"/>
        <Menu firstMenu="企业中心" secondMenu={['基本信息','广告管理']} path="/income"  menuCalss="company"/>
        <Menu firstMenu="订单管理" secondMenu={['订单列表','批量发货','退款售后']} path="/income"  menuCalss="order"/>
        <Menu firstMenu="视频管理" secondMenu={['我的视频']} path="/income"  menuCalss="video"/>
        <Menu firstMenu="客服聊天" secondMenu={['消息对话']} path="/income"  menuCalss="chitchat"/>
        <Menu firstMenu="通知" secondMenu={['通知列表']} path="/income"  menuCalss="notice"/>
        <Menu firstMenu="公告管理" secondMenu={['公告列表']} path="/income"  menuCalss="announcement"/>
        <Menu firstMenu="财务管理" secondMenu={['财务明细','提现']} path="/income"  menuCalss="finance"/>
      </div>
    );
  }
}
export default Sider