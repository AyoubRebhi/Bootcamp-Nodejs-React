import React, {Fragment} from "react";
import {Card} from "@mui/material";
import CardContent from '@mui/material/CardContent';
import {Button, Col, Row} from "antd";
import one from "./1.png"
import two from "./2.png"

const Rightcontent = () => {

    return (
        <Fragment>
            <Card style={{marginTop: "80px"}}>
                <CardContent>
                    <Row>
                        <Col span={16}>
                            <h3 style={{fontWeight: "bold"}}> Get Personalised Job <br/>Recommendation</h3>
                            <h5 style={{fontWeight: "bold"}}>
                                Registering gives you the benefit to browse & apply variety of jobs based on your
                                preferences
                                <Button style={{
                                    backgroundColor: "#12cc9e",
                                    color: "white",
                                    fontWeight: "bold",
                                    borderRadius: "5px",
                                    width: "100%",
                                    marginTop: "15px"
                                }}>
                                    Register Now
                                </Button>
                            </h5>
                        </Col>
                        <Col span={8}>
                            <img src={two} style={{width: "100%"}}/>
                        </Col>
                    </Row>
                </CardContent>
            </Card>
            <Card style={{marginTop: "80px"}}>
                <CardContent>
                    <Row>
                        <Col span={18}>
                            <h3 style={{fontWeight: "bold"}}> About The Producer of this App</h3>
                            <h5 style={{fontWeight: "bold"}}>

                                Captiosus Axons created in 2020 specialized in the field of Artificial Intelligence, Big
                                Data, Web Development & Mobile Development
                                <Button style={{
                                    backgroundColor: "#12cc9e",
                                    color: "white",
                                    fontWeight: "bold",
                                    borderRadius: "5px",
                                    width: "100%",
                                    marginTop: "15px"
                                }}>
                                    Register Now
                                </Button>
                            </h5>
                        </Col>
                        <Col span={6}>
                            <Row>
                                <Col span={14}></Col>
                                <Col span={10}>
                                    <img src={one} style={{width: "100%"}}/>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </CardContent>
            </Card>

        </Fragment>
    )
}

export default Rightcontent