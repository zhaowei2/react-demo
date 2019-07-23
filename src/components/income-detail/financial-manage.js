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
              {/* 今日收入 */}
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
                <Col span={24}>
                  <div className="today-income-detail">
                    <div className="detail-border"></div>
                      <div className="income-detail-content">
                        <div className="all-income">
                          <div className="title text-overflow">
                            <div className="lineheight40">
                              <span className="iconfont fs30 iconshouru_ iconfont-light"></span>
                              <span className="mode-title">总收入</span>
                            </div>
                            <span className="cost ">0.000</span><span className="fs-16">元</span>
                          </div>
                        <div className="all-detail">
                        <div className="detail-item">
                          <div className="goods-infor">商品收入：</div>
                          <div className="goods-income text-overflow">0.000<span className="fs12">元</span></div>
                        </div>
                        <div className="detail-item" >
                          <div className="goods-infor">合作总收益：</div>
                          <div className="goods-income text-overflow">0.000<span className="fs12">元</span></div>
                        </div>
                        <div className="detail-item" >
                          <div className="goods-infor">交易服务费退还：</div>
                        <div className="goods-income text-overflow">0.000<span className="fs12">元</span></div>
                      </div>
                    </div>
                
                  </div>
                <div className="all-income goods-income">
                  <div className="title text-overflow" >
                    <div className="lineheight40">
                      <span className="iconfont fs30 iconshangpin iconfont-light"></span>
                      <span className="mode-title">商品交易总收入</span>
                      <span className="iconfont iconwenhao "></span>:
                    </div>
                    <span className="cost ">0.000</span><span className="fs-16">元</span>
                  </div>
                  <div className="all-detail">
                    <div className="detail-item">
                      <div className="goods-infor">商品收入</div>
                      <div className="goods-income text-overflow">0.000<span className="fs12">元</span></div>
                  </div>
                  <div className="detail-item">
                    <div className="goods-infor">交易服务费退还：</div>
                    <div className="goods-income text-overflow">0.000<span className="fs12">元</span></div>
                  </div>
                </div>
              </div>
            </div>
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

                <div className="today-income-detail">
            <div className="detail-border"></div>
            <div className="income-detail-content">
              <div className="all-income">
                <div className="title text-overflow">
                  <div className="lineheight40">
                    <span className="iconfont fs30 iconzhichu_ iconfont-light"></span>
                    <span className="mode-title">总支出</span>
                      
                  </div>
                  <span className="cost">00</span><span className="fs-16">元</span>
                </div>
                <div className="all-detail">
                  <div className="detail-item" >
                    <div className="goods-infor">商家自用：</div>
                    <div className="goods-income text-overflow">0.000<span className="fs12">元</span></div>
                  </div>
                  <div className="detail-item" >
                    <div className="goods-infor">交易服务费：</div>
                    <div className="goods-income text-overflow">0.000<span className="fs12">元</span></div>
                  </div>
                  <div className="detail-item" >
                    <div className="goods-infor">商品退款：</div>
                    <div className="goods-income text-overflow">0.000<span className="fs12">元</span></div>
                  </div>
                   <div className="detail-item" >
                    <div className="goods-infor text-overflow">已提现收入：</div>
                    <div className="goods-income">0.000<span className="fs12">元</span></div>
                  </div>
                </div>
                
              </div>
              <div className="all-income goods-income">
                <div className="title">
                  <div className="lineheight40">
                    <span className="iconfont fs30 iconshangpin iconfont-light"></span>
                    <span className="mode-title">商品交易总支出</span>

                     
                  </div>
                  <span className="cost">0.000</span><span className="fs-16">元</span>
                </div>
                <div className="all-detail">
                  <div className="detail-item" >
                    <div className="goods-infor">商品退款：</div>
                    <div className="goods-income text-overflow">0.000<span className="fs12">元</span></div>
                  </div>
                  <div className="detail-item" >
                    <div className="goods-infor ">交易服务费：</div>
                    <div className="goods-income text-overflow">0.000<span className="fs12">元</span></div>
                  </div>
                </div>
              </div>
            </div>
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
                <div className="balance-detail cash-out" >
      <div className="balance-detail-title">
        <div className="goods-netincome">
          商品交易净收入  
        </div>
        <div className="goods-netincome-mon">
            0.000
            <span className="fs16">元</span>
        </div>
      </div>
      <div className="goods-pie">
        <div className="echart" id="echart"></div>
        <div className="echart-title">商品交易净收入</div>
        <div className="echart-num" >0<span className="fs16">元</span></div>
      </div>
        <div className="echart-detail">
          <div className="echart-item">
            <div id="goodsBalanceIncome" className="withdrawable-goods">
                <span>0%</span>
              </div>
              <div className="withdrawable-goods-title">
                <div className="withdrawable-goods-income">可提现商品净收入：</div>
                <div className="withdrawable-goods-income-mon">0<span className="fs16">元</span></div>
            </div>
          </div>
         <div className="echart-item">
            <div id="goodsFrozenIncome" className="withdrawable-goods frozen-income">
                <span>0%</span>
              </div>
              <div className="withdrawable-goods-title">
                <div className="withdrawable-goods-income ">冻结中商品净收入：</div>
                <div className="withdrawable-goods-income-mon">0<span className="fs16">元</span></div>
            </div>
          </div>
          <div className="echart-item">
            <div id="goodsWithdrawIncome" className="withdrawable-goods withdrawal-income">
                <span>0%</span>
              </div>
              <div className="withdrawable-goods-title">
                <div className="withdrawable-goods-income">已提现商品净收入：</div>
                <div className="withdrawable-goods-income-mon">0<span className="fs16">元</span></div>
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