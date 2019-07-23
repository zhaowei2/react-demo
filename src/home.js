import React from 'react';
import { Layout } from 'antd';
import HeaderComponent from './layout/header-component';
import AsideComponent from './layout/aside-component';
import ContentComponent from './layout/content-component';
const { Header, Sider, Content } = Layout;

function Home() {
    return (
      <div className="home">
        <Layout
          style={{
            height:'100vh'
          }}
        >
          <Header
            style={{
              height:'90px',
              background:'#FFF',
              padding:'0'
            }}
          >
            <HeaderComponent />
          </Header>
          <Layout>
            <Sider
              width="250"
              style={{
                background:'#FFF',
                boxShadow: '3px 1px 2px 0 rgba(41,33,0,.4)',
                left: 0,
              }}
            >
            <div className="rim"></div>
              <AsideComponent/>
            </Sider>
            <Content
              style={{
                background:'#f5f5f5',
              }}
            >
              <ContentComponent />
            </Content>
          </Layout>
      </Layout>
      </div>
    )
}
export default Home