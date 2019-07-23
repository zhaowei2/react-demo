import React from 'react';
import { Form, Input, Button } from 'antd';
import Axios from 'axios';
import { createStore } from 'redux'
import counter from './../reducers'
import {connect} from 'react-redux';
const store = createStore(counter)
class NormalLoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      strMobile:'11000000030',
      strPwd:'123456'
    };
    // this.handleUserNameChange =this.handleUserNameChange.bind(this)
    this.submitAccount =this.submitAccount.bind(this)
    this.handleIncrement=this.handleIncrement.bind(this)
  }
  handleUserNameChange = event => {
    console.log(event.target.value)
    this.setState({
      strMobile:event.target.value
    })
  };
  handlePsdChange = event => {
    this.setState({
      strPwd:event.target.value
    }) 
  };
  handleIncrement(){
    store.dispatch({ type: 'INCREMENT' })
    console.log(store.getState())
  };
  submitAccount(){
    const header ={
      "strPlatform": "web",
      "strVersion": "",
      "strEquipmentNo": ""
    }
    const body = this.state

    Axios.post('/user/loginpwdBus',{
      header:header,
      body:body
    }).then(res=>{
      console.log(res)
      if(res.data.code === 0){
        localStorage.setItem('userToken', res.data.token)
        localStorage.setItem('stNickName', res.data.data.strNickName)
        // localStorage.setItem('userIdNum', res.data.data.lEnterpriseId)
        let history = this.props.history;
        history.push('/');
      }else{
        console.log(res)
      }
    })
    console.log(this.state)
  }
  render(){
    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 6 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 14 },
      },
    };
 
    return (
      <div>
        {/* <div>
          <span>{store.getState()}</span>
          <button onClick={this.handleIncrement}>INCREMENT</button>
        </div> */}
        <div style={{textAlign:'left'}}>
          <img style={{width:'50px',height:'50px',margin:'20px'}} src="/imgs/logo_02.png" alt="logo"></img> 
        </div>

        <Form className="login-form" style={{width:'360px',margin:'0 auto'}}>
        <Form.Item  
          label="用户名"
          style={{marginBottom:'0'}}
          {...formItemLayout}
        >
          <Input style={{width:'260px'}} size="large" value={this.state.strMobile} onChange={this.handleUserNameChange} placeholder="用户名" />
        </Form.Item>  
        <Form.Item  
          label="密码"
          style={{marginBottom:'0'}}
          {...formItemLayout}
        >
        <Input style={{width:'260px'}} type="password" size="large" value={this.state.strPwd} onChange={this.handlePsdChange} placeholder="密码" />
        </Form.Item> 
        <Form.Item  
        {...formItemLayout}
          style={{textAlign:'left',marginLeft:'90px'}}
        >
            <Button type="primary" 
            style={{width:'70px',height:'40px',backgroundColor:'#ff9500',borderColor: '#ff9500'}}
            onClick={this.submitAccount}
            >
              登录
            </Button>
          </Form.Item>
      </Form>
    </div>
    )
  }
}

function select(state) {
  console.log(state)
  return {
      state: state.appleBusket
  }
}

export default NormalLoginForm
