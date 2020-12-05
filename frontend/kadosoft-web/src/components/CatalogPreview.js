import React, { Component } from "react";
import { Row, Col, Card, Modal } from "react-bootstrap";
import { Query } from "react-apollo";
import { GET_TOP_3_PORTOFOLIO } from "../gql/portofolio";
import './CatalogPreview.css';
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import MediaQuery from "react-responsive";
import {
    MIN_DESKTOP_SIZE
} from "../data/constants";
import ScrollAnimation from 'react-animate-on-scroll';


function CatalogLoadingPlaceholder() {
    const arr = [1, 2, 3];
    return (

        <MediaQuery minWidth={MIN_DESKTOP_SIZE}>
            {isDesktop => {
                const width = isDesktop ? 350 : window.innerWidth - 50;
                return (
                    <SkeletonTheme color="#FFFFFF" highlightColor="#f5f5f5">
                        <Row className="px-1 py-0 catalog-card-row justify-content-center align-items-center">
                            {arr.map(index => (
                                <Col xs={12} sm={12} md={12} lg={4} className="catalog-card-col my-2 " key={`loading-${index}`} >
                                    <Row className="justify-content-center align-items-center">
                                        <Skeleton width={width} height={index === 2 ? 533 : 430} />
                                    </Row>
                                </Col>
                            ))}
                        </Row>
                    </SkeletonTheme>
                );
            }}
        </MediaQuery>
    );
}

function ModalCatalog(props) {
    const { data, onHide } = props;
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Body className="catalog-detail">
                <Row className="">
                    <Col xs={12} sm={12} md={12} lg={6} className="">
                        {data.photo.map((photo, index) => (
                            photo.type === "main" &&
                            <div className="catalog-main-photo-container" key={`photo-${index}`}>
                                <img src={photo.url} alt={`${data.name}-main`} className="catalog-main-photo" />
                            </div>
                        ))}
                    </Col>
                    <Col xs={12} sm={12} md={12} lg={6} className=" modal-catalog-content">
                        <h2 className="catalog-title">
                            {data.name}
                        </h2>
                        <div className="catalog-description">
                            {data.description}
                        </div>
                        <div className="demo-btn">
                            <a href={data.url} target="_blank" rel="noopener noreferrer" className="btn draw-border "><i className="fas fa-play"></i> Try Our Demo</a>
                        </div>
                    </Col>

                </Row>

                <span className="fa-stack modal-close-button" onClick={onHide}>
                    <i className="fas fa-circle fa-stack-2x catalog-back-button-wrapper"></i>
                    <i className="fas fa-chevron-left fa-stack-1x catalog-back-button"></i>
                </span>
            </Modal.Body>
        </Modal>
    );
}

function CatalogItem(props) {
    const { data } = props;
    const [showModal, setShowModal] = React.useState(false);
    const updateShowModal = () => {
        setShowModal(!showModal);
    }
    return (
        <>
            <Card className="catalog-card hover-top">
                {data.photo.map((photo, index) => (
                    photo.type === "preview" &&
                    <Card.Img variant="top" src={photo.url} key={`photo-${index}`} className="catalog-photo" />
                ))}

                <Card.Body>
                    <Card.Title className="align-items-center d-flex">
                        <span>{data.name}</span>
                        <span className="catalog-category ml-2 px-2">{data.category.category_name}</span>
                    </Card.Title>
                    <Card.Text>
                        {`${data.description.substring(0, 200)}...`}
                    </Card.Text>
                    {/* <Row className="justify-content-center align-items-center"> */}
                    <button className="btn draw-border" onClick={() => {
                        updateShowModal();
                    }}>View More</button>
                    {/* </Row> */}
                </Card.Body>
            </Card>
            <ModalCatalog
                show={showModal}
                onHide={() => setShowModal()}
                data={data}
            />
        </>
    )
}

class CatalogPreview extends Component {
    render() {
        return (
            <Query
                query={GET_TOP_3_PORTOFOLIO}
                fetchPolicy={"cache-and-network"}
            >
                {({ loading, error, data }) => {
                    if (loading) return <CatalogLoadingPlaceholder />;
                    if (error) {
                        console.log(`Error! ${error.message}`);
                        return "";
                    }
                    return (
                        <React.Fragment>
                            <Row className="px-1 pt-0 pb-3 catalog-card-row justify-content-center align-items-center">
                                {data.getTop3Portofolio.map((portofolio, index) => (
                                    <Col xs={12} sm={12} md={12} lg={4} className="catalog-card-col my-2" key={`portofolio ${index}`} >

                                        <ScrollAnimation duration={2} animateIn="slideInLeft" animateOnce={true}>
                                            <CatalogItem data={portofolio} />
                                        </ScrollAnimation>
                                    </Col>
                                )
                                )}
                            </Row>
                        </React.Fragment>
                    );
                }
                }
            </Query >
        );
    }
}

export default CatalogPreview;