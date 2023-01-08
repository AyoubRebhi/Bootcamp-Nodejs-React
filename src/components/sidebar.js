import React, {Fragment, useState} from "react"
import {Col, Row} from "antd";
import {Card} from "@mui/material";
import CardContent from '@mui/material/CardContent';
import FilterListIcon from '@mui/icons-material/FilterList';
import Slider from '@mui/material/Slider';
import arrow from "./arrow.png"

const Sidebar = () => {
    const [dropdownradio, setDropdownradio] = useState(false)
    const [dropdowncheck1, setDropdowncheck1] = useState(false)
    const [dropdowncheck2, setDropdowncheck2] = useState(false)
    const [dropdownslider, setDropdownslider] = useState(false)


    return (
        <Fragment>
            <Card style={{marginTop:"50px", borderRadius:"10px"}}>
                <CardContent>
                    <Row>
                        <FilterListIcon style={{height:"32px"}}/>
                        <h2>All filters</h2>
                    </Row>
                    <Row>
                        <Col span={2}></Col>
                        <Col span={20}>
                            <h2 style={{fontWeight:"bold"}}>Freshness</h2>
                            <div hidden={dropdownradio == false}>
                                <Row> <input type={"radio"}/> <h4 style={{marginLeft: "20px", marginTop: "7px"}}>Last 1
                                    day</h4></Row>
                                <Row> <input type={"radio"}/> <h4 style={{marginLeft: "20px", marginTop: "7px"}}>Last 3
                                    day</h4></Row>
                                <Row> <input type={"radio"}/> <h4 style={{marginLeft: "20px", marginTop: "7px"}}>Last 7
                                    day</h4></Row>
                                <Row> <input type={"radio"}/> <h4 style={{marginLeft: "20px", marginTop: "7px"}}>Last 15
                                    day</h4></Row>
                            </div>
                        </Col>
                        <Col>
                            <img onClick={() => setDropdownradio(!dropdownradio)} src={arrow}
                                 style={{width: "20px", marginTop: "10px", cursor: "pointer"}}/>
                        </Col>
                    </Row>
                    <hr style={{width: "100%", color: "gray", marginTop: "30px", marginBottom: "30px"}}/>
                    <Row>
                        <Col span={2}></Col>
                        <Col span={20}>
                            <h2 style={{fontWeight:"bold"}}>Job type</h2>
                            <div hidden={dropdowncheck1 == false}>
                                <Row> <input type={"checkbox"}/> <h4 style={{marginLeft: "20px", marginTop: "7px"}}>Full
                                    time</h4>
                                </Row>
                                <Row> <input type={"checkbox"}/> <h4 style={{marginLeft: "20px", marginTop: "7px"}}>Part
                                    time</h4></Row>
                                <Row> <input type={"checkbox"}/> <h4
                                    style={{marginLeft: "20px", marginTop: "7px"}}>Contract</h4></Row>
                                <Row> <input type={"checkbox"}/> <h4
                                    style={{marginLeft: "20px", marginTop: "7px"}}>Internship</h4></Row>
                            </div>
                        </Col>
                        <Col>
                            <img onClick={() => setDropdowncheck1(!dropdowncheck1)} src={arrow}
                                 style={{width: "20px", marginTop: "10px", cursor: "pointer"}}/>
                        </Col>
                    </Row>
                    <hr style={{width: "100%", color: "gray", marginTop: "30px", marginBottom: "30px"}}/>
                    <Row>
                        <Col span={2}></Col>
                        <Col span={20}>
                            <h2 style={{fontWeight:"bold"}}>Experience</h2>
                            <div hidden={dropdownslider == false}>
                                <Slider
                                    style={{color: "#12cc9e"}}
                                    max={10}
                                    aria-label="Always visible"
                                    defaultValue={5}
                                    step={0.1}
                                    valueLabelDisplay="on"
                                />
                                <Row>
                                    <Col span={20}>
                                        <h5>0 Yrs</h5>
                                    </Col>
                                    <Col>
                                        <h5>10 Yrs</h5>
                                    </Col>
                                </Row>
                            </div>
                        </Col>
                        <Col>
                            <img onClick={() => setDropdownslider(!dropdownslider)} src={arrow}
                                 style={{width: "20px", marginTop: "10px", cursor: "pointer"}}/>
                        </Col>
                    </Row>
                    <hr style={{width: "100%", color: "gray", marginTop: "30px", marginBottom: "30px"}}/>
                    <Row>
                        <Col span={2}></Col>
                        <Col span={20}>
                            <h2 style={{fontWeight:"bold"}}>Location</h2>
                            <div hidden={dropdowncheck2 == false}>
                                <Row> <input type={"checkbox"}/> <h4 style={{marginLeft: "20px", marginTop: "7px"}}>Al-Monastir</h4></Row>
                                <Row> <input type={"checkbox"}/> <h4 style={{marginLeft: "20px", marginTop: "7px"}}>Sousse</h4></Row>
                                <Row> <input type={"checkbox"}/> <h4 style={{marginLeft: "20px", marginTop: "7px"}}>Sfax</h4></Row>
                                <Row> <input type={"checkbox"}/> <h4 style={{marginLeft: "20px", marginTop: "7px"}}>Tunis</h4></Row>
                            </div>
                        </Col>
                        <Col>
                            <img onClick={() => setDropdowncheck2(!dropdowncheck2)} src={arrow}
                                 style={{width: "20px", marginTop: "10px", cursor: "pointer"}}/>
                        </Col>
                    </Row>
                </CardContent>
            </Card>
        </Fragment>
    )
}

export default Sidebar