import React, {Fragment} from 'react';
import {Row, Col, Button} from "antd";
import {Card} from "@mui/material";
import CardContent from '@mui/material/CardContent';


const Header = () => {


    return (
        <Fragment>
            <div style={{
                    width: "100%",
                    backgroundColor: "white",
                    borderBottom: "gray",
                    borderBottomWidth: "8px"
                }}>
                <Row >
                    <Col span={4}></Col>
                    <Col span={4}>

                        <h1>Logo</h1>
                    </Col>
                    <Col span={10}>
                        <Row style={{marginTop:"10px"}}>
                            <Col span={4}></Col>
                            <Col span={4}>
                                <h3>Home</h3>
                            </Col>
                            <Col span={4}>
                                <h3>Jobs</h3>
                            </Col>
                            <Col span={4}>
                                <h3>About Us</h3>
                            </Col>
                            <Col span={4}>
                                <h3>Contact</h3>
                            </Col>
                            <Col span={4}></Col>
                        </Row>
                    </Col>
                    <Col span={2}></Col>
                    <Col span={4} style={{marginTop:"10px"}}>

                        <Button style={{ marginLeft:"5px", borderRadius:"10px"}}>
                            Sign In
                        </Button>
                        <Button style={{backgroundColor: '#202A4D', color:"white", marginLeft:"5px", borderRadius:"10px"}}>
                            Create Account
                        </Button>
                    </Col>
                </Row></div>
        </Fragment>

    );
}
export default Header