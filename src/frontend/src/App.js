import { useState, useEffect } from 'react'
import { getAllBreweries } from "./client";
import { PageHeader } from "antd";
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
        title: 'Type of Drink',
        dataIndex: 'type',
        key: 'type',
    },
    {
        title: 'Name of Drink',
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

function App(props) {
    const [breweries, setBreweries] = useState([]);
    const [collapsed, setCollapsed] = useState(false);
    const [fetching, setFetching] = useState(true);
    const { handleClick } = props;
    const [render, updateRender] = useState(1);

    //Manages state of application
    const fetchBreweries = () =>
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
        fontSize: "30px",
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

    const handleMenuClick = menu => {
        updateRender(menu.key);
    }

    return <Layout style={{minHeight: '100vh'}}>
        <Sider handleClick={handleMenuClick} collapsible collapsed={collapsed}
               onCollapse={setCollapsed}>
            <div className="logo"/>
            <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
                <Menu.Item>Dabbler</Menu.Item>
                <Menu.Item key="1" onClick={handleClick} icon={<PieChartOutlined/>}>
                    All Breweries
                </Menu.Item>
                <Menu.Item key="2" onClick={handleClick} icon={<DesktopOutlined/>}>
                    Guestbook
                </Menu.Item>
                <Menu.Item key="3" onClick={handleClick} icon={<HeatMapOutlined/>}>
                    Heatmap
                </Menu.Item>
                <SubMenu key="sub1" icon={<UserOutlined/>} title="Top 10 Breweries">
                    <Menu.Item key="3">Bauhaus Brew Labs</Menu.Item>
                    <Menu.Item key="4">Bald Man Brewing</Menu.Item>
                    <Menu.Item key="5">Dangerous Man Brewing Co.</Menu.Item>
                    <Menu.Item key="6">Bent Paddle Brewing Company</Menu.Item>
                    <Menu.Item key="7">Day Block Brewing Co.</Menu.Item>
                    <Menu.Item key="8">Modist Brewing</Menu.Item>
                    <Menu.Item key="9">Tin Whiskers Brewing Co</Menu.Item>
                    <Menu.Item key="10">Steel Toe Brewing</Menu.Item>
                    <Menu.Item key="11">Urban Growler Brewing Co.</Menu.Item>
                    <Menu.Item key="12">Cuyuna Brewing Company</Menu.Item>
                </SubMenu>
                <SubMenu key="sub2" icon={<TeamOutlined/>} title="Team">
                    <Menu.Item key="6">Martin Jaakola</Menu.Item>
                    <Menu.Item key="8">Davis Anderson</Menu.Item>
                </SubMenu>
                <Menu.Item key="9" icon={<FileOutlined/>}>
                    Files
                </Menu.Item>
            </Menu>
        </Sider>
        <Layout className="site-layout">
            <Header className="site-layout-background" style={{padding: 0}}/>
            <Content style={{margin: '0 16px'}}>
                <Layout>
                    <Content>{components[render]}</Content>
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
