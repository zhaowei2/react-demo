import React from 'react';
import { Breadcrumb , Row, Col } from 'antd';
import { Button} from 'antd';
class Section extends React.Component {
  // constructor(props) {
  //   super(props);
  // }
  handleClick(e) {
    console.log('click', e);
  }
  render(){
    return (
      <div style={{padding:"30px 20px 40px 26px"}}>
         <Breadcrumb separator=">" style={{background:'#f5f5f5',textAlign:'left'}}>
          <Breadcrumb.Item>首页</Breadcrumb.Item>
          <Breadcrumb.Item href="">财务管理</Breadcrumb.Item>
          <Breadcrumb.Item href="">财务明细</Breadcrumb.Item>
        </Breadcrumb>
        <div className="el-finance">
          <div className="el-finance-tabs"> 
            <div className="el-finance-tab income-deta active">财务明细</div>
            <div className="el-finance-tab cash-out" >提现</div>
          </div>
          <div className="el-finance-container">
            <Row gutter={30}>
              <Col span={8}>
                <Col span={24}>
                  <div className="today-income text-overflow">
                    <div className="label" >
                      <span className="income-icon"></span>
                      <span className="today-title">今日收入</span>
                    </div>
                    <div className="today-income-cost">0.000<span className="fs16">元</span></div>
                  </div>
                </Col>
              </Col>
              <Col span={8}>
                <div className="today-income text-overflow" >
                  <div className="label">
                    <span className="payout-icon"></span>
                    <span className="today-title">今日支出</span>
                  </div>
                  <div className="today-income-cost">-0.000<span className="fs16">元</span></div>
                </div>
              </Col>
              <Col span={8}>
                <div className="today-balance" >
                  <div className="balance-title">账户余额</div>
                    <div className="account-balance ">
                      <span className="balance-mon">0.000<span className="fs16">元</span></span>
                      <Button style={{float:'right',marginRight: 49,borderRadius: 10,padding:'0 20px'}} size={"large"}>提现</Button>
                        {/* <el-button >提现</el-button> */}
                    </div>
                    <div className="balance-pie">
                      <div className="lf">
                        {/* <!--余额 可提现商品收入 --> */}
                        <div id="balanceWithdrawalIncome" className="pie goods-income">
                          <span>100%</span>
                        </div>
                      <div className="pie-title">
                        <div className="pie-income">可提现商品净收入：</div>
                        <div className="pie-income-mon">0.000<span className="fs16">元</span></div>
                      </div>
                    </div>
                    <div className="rf">
                      {/* <!--余额 合作收益 --> */}
                      <div id="cooperativeProfit" className="pie profit">
                        <span>100%</span>
                      </div>
                      <div className="pie-title">
                        <div className="pie-income">合作收益：</div>
                        <div className="pie-income-mon">0.000<span className="fs16">元</span></div>
                      </div>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </div>
      </div>
    )
  }
}
export default Section