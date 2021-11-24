import { useState, useEffect } from 'react'
import { getAllBreweries } from "./client";
import { Layout, Menu, Breadcrumb } from 'antd';
import {
    DesktopOutlined,
    PieChartOutlined,
    FileOutlined,
    TeamOutlined,
    UserOutlined,
} from '@ant-design/icons';

import './App.css';

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

function App() {
    const[breweries, setBreweries] = useState([]);
    const[collapsed, setCollapsed] = useState(false);

    //Manages state of application
    const fetchBreweries = () =>
        getAllBreweries()
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setBreweries(data);
            })

    useEffect(() => {
        console.log("component successfully mounted");
        fetchBreweries();
    }, []);

    if (breweries.length <= 0) {
        return "no data";
    }

    return <Layout style={{ minHeight: '100vh' }}>
        <Sider collapsible collapsed={collapsed}
               onCollapse={setCollapsed}>
            <div className="logo" />
            <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
                <Menu.Item>Dabbler</Menu.Item>
                <Menu.Item key="1" icon={<PieChartOutlined />}>
                    Feature 1
                </Menu.Item>
                <Menu.Item key="2" icon={<DesktopOutlined />}>
                    Feature 2
                </Menu.Item>
                <SubMenu key="sub1" icon={<UserOutlined />} title="Menu">
                    <Menu.Item key="3">Brewery 1</Menu.Item>
                    <Menu.Item key="4">Brewery 2</Menu.Item>
                    <Menu.Item key="5">Brewery 3</Menu.Item>
                </SubMenu>
                <SubMenu key="sub2" icon={<TeamOutlined />} title="Team">
                    <Menu.Item key="6">Martin Jaakola</Menu.Item>
                    <Menu.Item key="8">Davis Anderson</Menu.Item>
                </SubMenu>
                <Menu.Item key="9" icon={<FileOutlined />}>
                    Files
                </Menu.Item>
            </Menu>
        </Sider>
        <Layout className="site-layout">
            <Header className="site-layout-background" style={{ padding: 0 }} />
            <Content style={{ margin: '0 16px' }}>
                <Breadcrumb style={{ margin: '16px 0' }}>
                    <Breadcrumb.Item>Brewery</Breadcrumb.Item>
                    <Breadcrumb.Item>Location</Breadcrumb.Item>
                </Breadcrumb>
                <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
                    Dabbler
                </div>
            </Content>
            <Footer style={{ textAlign: 'center' }}>©2021 Created by Martin Jaakola & Davis Anderson
                <br/>
                Original Layout: Ant Design</Footer>
        </Layout>
    </Layout>
}

export default App;
