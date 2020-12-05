import React from 'react';
// import IMAGES from "../data/images";
import CatalogPreview from "../components/CatalogPreview";
import { Row } from "react-bootstrap";
import "./Home.css";

function Home() {
    const [category, setCategory] = React.useState(0);
    const updateCategory = (param) => {
        setCategory(param);
    }
    return (
        <main>
            <section className="section parallax effect-section catalog-background">
                <div className="mask dark-bg opacity-4"></div>
                <div className="container position-relative">
                    <div className="row align-items-center justify-content-center">
                        <div className="col-lg  -10 text-center">
                            <h1 className="display-4 white-color m-0px">Welcome To KadoSoft's Apps Demo</h1>
                        </div>
                    </div>
                </div>
                <span className="fa-stack back-button" onClick={() => {
                    window.location.replace("https://kadosoft.co.id/catalog");
                }} >
                    <i className="fas fa-circle fa-stack-2x catalog-back-button-wrapper"></i>
                    <i className="fas fa-chevron-left fa-stack-1x catalog-back-button"></i>
                </span>
            </section>

            <section className="gray-bg">
                <div className="container pt-3 pb-5">
                    <Row className="justify-content-center pt-3 pb-4">
                        <button className={`${category === 0 ? "active-btn" : "btn-kadosoft"}`} onClick={() => (updateCategory(0))}>All</button>
                        <button className={`${category === 1 ? "active-btn" : "btn-kadosoft"}`} onClick={() => (updateCategory(1))}>Web Dev</button>
                        <button className={`${category === 2 ? "active-btn" : "btn-kadosoft"}`} onClick={() => (updateCategory(2))}>E-Commerce</button>
                        <button className={`${category === 3 ? "active-btn" : "btn-kadosoft"}`} onClick={() => (updateCategory(3))}>Social Media</button>
                    </Row>
                    <div className="portfolio-content grid-gutter-lg grid-col-3 lightbox-gallery">
                        <CatalogPreview category={category} />
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Home;