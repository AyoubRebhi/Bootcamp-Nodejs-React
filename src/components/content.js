import React, {Fragment} from "react"
import {Card} from "@mui/material";
import CardContent from '@mui/material/CardContent';
import StarIcon from '@mui/icons-material/Star';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import usePagination from '@mui/material/usePagination';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import VisibilityIcon from '@mui/icons-material/Visibility';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import {styled} from '@mui/material/styles';
import DoneOutlineIcon from '@mui/icons-material/DoneOutline';
import RestoreIcon from '@mui/icons-material/Restore';
import NearMeIcon from '@mui/icons-material/NearMe';
import {Col, Row, Button} from "antd";

const Content = () => {
    const List = styled('ul')({
        listStyle: 'none',
        padding: 0,
        margin: 0,
        display: 'flex',
    });
    const {items} = usePagination({
        count: 10,
    });
    const Data = [
        {
            title: "Senior Engineering Manager",
            subtitle: "Catiousus axons",
            reviews: "150 Reviews",
            duration: "1/2Yrs",
            salary: "Not Disclosed",
            location: "Sousse/Tunis",
            description: "Bachelors or equiv in technical degree Must Have Skills Good To Have Skills ",
            words: ["IT Skills", "Java", "Testing", "Soft Skills", "React", "Product Testing", "Web Technologies"],
            enabled: true,
            history: "2 Days Ago"
        },
        {
            title: "Head-Cyber Security (VP/SVP) For ReBIT",
            subtitle: "Catiousus axons",
            reviews: "150 Reviews",
            duration: "1/2Yrs",
            salary: "50k- 65k $",
            location: "Sousse/Tunis",
            description: "Bachelors or equiv in technical degree Must Have Skills Good To Have Skills ",
            words: ["IT Skills", "Java", "Testing", "Soft Skills", "React", "Product Testing", "Web Technologies"],
            enabled: true,
            history: "2 Days Ago"
        },
        {
            title: "Head-Cyber Security (VP/SVP) For ReBIT",
            subtitle: "Catiousus axons",
            reviews: "150 Reviews",
            duration: "1/2Yrs",
            salary: "50k- 65k $",
            location: "Sousse/Tunis",
            description: "Bachelors or equiv in technical degree Must Have Skills Good To Have Skills ",
            words: ["IT Skills", "Java", "Testing", "Soft Skills", "React", "Product Testing", "Web Technologies"],
            enabled: true,
            history: "2 Days Ago"
        }
    ]

    return (

        <Fragment>
            <p style={{marginTop: "50px"}}>1-20 of 84 Information Technology Jobs</p>
            {Data && Data.map(item => (
                <Card style={{marginBottom: "20px"}}>
                    <CardContent>
                        <Row>
                            <Col span={18}>
                                <h2>{item.title}</h2>
                            </Col>
                            <Col>
                                <Row>
                                    <VisibilityIcon style={{
                                        color: "gray",
                                        fontSize: "20px",
                                        marginLeft: "10px",
                                        marginRight: "3px"
                                    }}/>
                                    <h5>180 viewers</h5>
                                    <FavoriteBorderIcon style={{
                                        color: "gray",
                                        fontSize: "20px",
                                        marginLeft: "10px",
                                        marginRight: "3px"
                                    }}/>
                                    <h5>Save</h5>
                                </Row>

                            </Col>
                        </Row>

                        <Row>
                            <h4>{item.subtitle}</h4>
                            <StarIcon style={{
                                color: "#FA9D22",
                                fontSize: "15px",
                                marginLeft: "10px",
                                marginTop: "3px",
                                marginRight: "3px"
                            }}/>
                            <h5>({item.reviews})</h5>
                        </Row>
                        <Row>
                            <BusinessCenterIcon style={{
                                color: "gray",
                                fontSize: "15px",
                                marginLeft: "10px",
                                marginTop: "3px",
                                marginRight: "3px"
                            }}/>
                            <h5>{item.duration}</h5>

                            <AttachMoneyIcon style={{
                                color: "gray",
                                fontSize: "15px",
                                marginLeft: "10px",
                                marginTop: "3px",
                                marginRight: "3px"
                            }}/>
                            <h5>{item.salary}</h5>

                            <LocationOnIcon style={{
                                color: "gray",
                                fontSize: "15px",
                                marginLeft: "10px",
                                marginTop: "3px",
                                marginRight: "3px"
                            }}/>
                            <h5>{item.location}</h5>
                        </Row>
                        <Row>
                            <LibraryBooksIcon style={{
                                color: "gray",
                                fontSize: "15px",
                                marginLeft: "10px",
                                marginTop: "3px",
                                marginRight: "3px"
                            }}/>
                            <h5>{item.description}</h5>
                        </Row>
                        <Row style={{marginTop: "15px"}}>
                            {item.words.map(w => (

                                <p style={{
                                    backgroundColor: "lightgray",
                                    fontSize: "10px",
                                    marginRight: "10px",
                                    paddingRight: "5px",
                                    paddingLeft: "5px"
                                }}>
                                    {w}
                                </p>

                            ))}
                        </Row>
                        <Row>
                            <h6 style={{
                                backgroundColor: "#D1FFE2",
                                fontSize: "10px",
                                marginTop: "10px",
                                paddingRight: "5px",
                                paddingLeft: "5px"
                            }}><DoneOutlineIcon style={{color: "gray", fontSize: "10px", marginRight: "3px"}}/>Enabled
                            </h6>
                            <h6 style={{
                                backgroundColor: "lightgray",
                                fontSize: "10px",
                                marginTop: "10px",
                                marginLeft: "12px",
                                paddingRight: "5px",
                                paddingLeft: "5px"
                            }}><RestoreIcon
                                style={{color: "gray", fontSize: "10px", marginRight: "3px"}}/>{item.history}</h6>
                        </Row>
                        <Row>
                            <Col span={18}></Col>
                            <Button style={{borderColor: "#12cc9e", borderWidth: "2px", backgroundColor: "white"}}>
                                <Row>
                                    <VisibilityIcon style={{color: "#12cc9e", fontSize: "15px", marginRight: "3px"}}/>
                                    <h5 style={{color: "#12cc9e"}}>View</h5>
                                </Row>
                            </Button>
                            <Button style={{backgroundColor: "#12cc9e", borderColor: "#12cc9e", marginLeft: "5px"}}>
                                <Row>
                                    <NearMeIcon style={{color: "white", fontSize: "15px", marginRight: "3px"}}/>
                                    <h5 style={{color: "white"}}>Apply</h5>
                                </Row>
                            </Button>
                        </Row>
                    </CardContent>
                </Card>
            ))}
            <Row style={{marginTop:"50px", marginBottom:"50px"}}>
                <Col span={10}></Col>
            <nav>
                <List>
                    {items.map(({page, type, selected, ...item}, index) => {
                        let children = null;

                        if (type === 'start-ellipsis' || type === 'end-ellipsis') {
                            children = '…';
                        } else if (type === 'page') {
                            children = (
                                <Button
                                    type="button"
                                    style={{
                                        fontWeight: selected ? 'bold' : undefined,
                                        color:"#12cc9e"
                                    }}
                                    {...item}
                                >
                                    {page}
                                </Button>
                            );
                        } else {
                            children = (
                                <Button style={{color:"#12cc9e", borderColor:"#12cc9e", borderWidth:"2px"}} type="button" {...item}>
                                    {type}
                                </Button>
                            );
                        }

                        return <li key={index}>{children}</li>;
                    })}
                </List>
            </nav></Row>
        </Fragment>
    )
}

export default Content