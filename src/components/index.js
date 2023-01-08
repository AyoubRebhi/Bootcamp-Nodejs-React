import React, {Fragment} from "react";
import Header from "./header";
import Sidebar from "./sidebar";
import Content from "./content"
import Rightcontent from "./rightcontent";
import {Row, Col} from "antd";

const Index = () => {

    return (
        <div style={{backgroundColor:"#efefef", backgroundClip:"full"}}>
                <Header/>
            <Row>
                <Col span={1}></Col>
                <Col span={6}>
                    <Sidebar/>
                </Col>
                <Col span={1}></Col>
                <Col span={9}>
                    <Content/>
                </Col>
                <Col span={1}></Col>
                <Col span={5}>
                    <Rightcontent/>
                </Col>
                <Col span={1}></Col>
            </Row>

        </div>
    )
}

export default Index