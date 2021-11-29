import { useState, useEffect } from 'react'
import { getAllBreweries } from "./client";
import { createBrewery } from "./client";

import {
    Layout,
    Menu,
    Breadcrumb,
    Table, Spin, Empty,
} from 'antd';

import {
    DesktopOutlined,
    PieChartOutlined,
    FileOutlined,
    TeamOutlined,
    UserOutlined, LoadingOutlined, HeatMapOutlined,
} from '@ant-design/icons';

import './App.css';

const { Header, Content, Footer, Sider} = Layout;
const { SubMenu } = Menu;

const columns = [
    {
        title: 'Position',
        dataIndex: 'id',
        key: 'id',
    },
    {
        title: 'Brewery Name',
        dataIndex: 'name',
        key: 'name',
    },
    {
        title: 'Location',
        dataIndex: 'location',
        key: 'location',
    },
    {
        title: 'Drink Type',
        dataIndex: 'drink',
        key: 'drink',
    },
    {
        title: 'Known For',
        dataIndex: 'type',
        key: 'type',
    },
    {
        title: 'Top Drink',
        dataIndex: 'title',
        key: 'title',
    },
    {
        title: 'Total Beers on Tap',
        dataIndex: 'numberOfBeers',
        key: 'numberOfBeers',
    },
    {
        title: 'Url',
        dataIndex: 'url',
        key: 'url',
    },
];

const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />

function App() {
    const [breweries, setBreweries] = useState([]);
    const [collapsed, setCollapsed] = useState(false);
    const [fetching, setFetching] = useState(true);
    const [render, updateRender] = useState(1);
    const [implement, updateElement] = useState(1);

    //Manages state of application
    const fetchBreweries = () =>
        createBrewery()
        getAllBreweries()
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setBreweries(data);
                setFetching(false);
            })

    useEffect(() => {
        console.log("component successfully mounted");
        fetchBreweries();
    }, []);

    const renderBreweries = () => {
        if (fetching) {
            return <Spin indicator={antIcon} />
        }
        if (breweries.length <= 0) {
            return <Empty />;
        }
        return <Table
            dataSource={breweries}
            columns={columns}
            bordered
            title={() => 'Minnesota Brewery Power Ranking: Top 100'}
            pagination={{ pageSize: 50 }}
            scroll={{ y: 240 }}
            rowKey={(brewery) => brewery.id}
        />;
    }

    const style = {
        fontSize: "40px",
        height: "100px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    };

    const components = {
        1: <div style={style}>All Breweries</div>,
        2: <div style={style}>Guestbook</div>,
        3: <div style={style}>Heatmap</div>
    };

    const elements = {
        1: <div style={style}>Home screen</div>,
        2: <div style={style}>Function to add brewery via post method</div>,
        3: <div style={style}>Import Google Maps</div>
    }

    const handleMenuClick = menu => {
        updateRender(menu.key);
        updateElement(menu.key);
    }

        return <Layout style={{minHeight: '100vh'}}>
            <Sider collapsible collapsed={collapsed}
                   onCollapse={setCollapsed}>
                <div className="logo"/>
                <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
                    <Menu.Item>Dabbler</Menu.Item>
                    <Menu.Item key="1" icon={<PieChartOutlined/>} onClick={handleMenuClick}>
                        All Breweries TEST
                    </Menu.Item>
                    <Menu.Item key="2" icon={<DesktopOutlined/>} onClick={handleMenuClick}>
                        Guestbook
                    </Menu.Item>
                    <Menu.Item key="3" icon={<HeatMapOutlined/>} onClick={handleMenuClick}>
                        Heatmap
                    </Menu.Item>
                    <SubMenu key="sub1" icon={<UserOutlined/>} title="Top 10 Breweries">
                        <Menu.Item key="4">Bauhaus Brew Labs</Menu.Item>
                        <Menu.Item key="5">Bald Man Brewing</Menu.Item>
                        <Menu.Item key="6">Dangerous Man Brewing Co.</Menu.Item>
                        <Menu.Item key="7">Bent Paddle Brewing Company</Menu.Item>
                        <Menu.Item key="8">Day Block Brewing Co.</Menu.Item>
                        <Menu.Item key="9">Modist Brewing</Menu.Item>
                        <Menu.Item key="10">Tin Whiskers Brewing Co</Menu.Item>
                        <Menu.Item key="11">Steel Toe Brewing</Menu.Item>
                        <Menu.Item key="12">Urban Growler Brewing Co.</Menu.Item>
                        <Menu.Item key="13">Cuyuna Brewing Company</Menu.Item>
                    </SubMenu>
                    <SubMenu key="sub2" icon={<TeamOutlined/>} title="Team">
                        <Menu.Item key="14">Martin Jaakola</Menu.Item>
                        <Menu.Item key="15">Davis Anderson</Menu.Item>
                    </SubMenu>
                    <Menu.Item key="16" icon={<FileOutlined/>}>
                        Files
                    </Menu.Item>
                </Menu>
            </Sider>
            <Layout className="site-layout">
                <Header className="site-layout-background" style={{padding: 0}}/>
                <Content style={{margin: '0 16px'}}>
                    <Layout>
                        <Content>{components[render]}</Content>
                        <Content>{elements[implement]}</Content>
                    </Layout>
                    <Breadcrumb style={{margin: '16px 0'}}>
                        <Breadcrumb.Item>Brewery</Breadcrumb.Item>
                        <Breadcrumb.Item>Location</Breadcrumb.Item>
                        <Breadcrumb.Item>Minnesota</Breadcrumb.Item>
                    </Breadcrumb>
                    <div className="site-layout-background" style={{padding: 24, minHeight: 360}}>
                        {renderBreweries()}
                    </div>
                </Content>
                <Footer style={{textAlign: 'center'}}>©2021 Created by Martin Jaakola & Davis Anderson</Footer>
            </Layout>
        </Layout>
}

export default App;
