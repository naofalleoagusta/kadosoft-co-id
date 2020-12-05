import React from 'react';
// import AppPreview from '../components/AppPreview';
import CatalogPreview from '../components/CatalogPreview';
// import IMAGES from "../data/images";
import './Catalog.css';
import URLS from "../data/urls";

class Catalog extends React.Component {
    render() {
        return (
            <main className="">
                <section className="section parallax effect-section catalog-background">
                    <div className="mask dark-bg opacity-4"></div>
                    <div className="container position-relative">
                        <div className="row align-items-center justify-content-center">
                            <div className="col-lg-10 text-center">
                                <h1 className="display-4 white-color m-0px">Product Catalog</h1>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="py-5 gray-bg">
                    <div className="row justify-content-center md-m-25px-b m-40px-b">
                        <div className="text-center px-3">
                            <h3 className="h1 m-15px-b after-50 theme-after ">Our Hottest Product</h3>
                            <p className="m-0px font-2 px-3">“Everyday life is like programming, I guess. If you love something you can put beauty into it.” -
                            <b> Donald Knuth</b></p>
                        </div>
                    </div>
                    <div className="container py-4">
                        <CatalogPreview />
                    </div>
                </section>
                <section className="parallax effect-section p-40px-tb background">
                    <div className="mask black-bg opacity-8"></div>

                    <div className="container position-relative">
                        <div className="row align-items-center">
                            <div className="col-lg-8 col-md-7 m-15px-tb text-md-left text-center">
                                <h3 className="white-color m-0px">We Have More Surprises For You!</h3>
                            </div>

                            <div className="col-lg-4 col-md-5 m-15px-tb text-md-right text-center"><a
                                className="m-btn m-btn-t-white m-btn-radius" href={URLS.DEMO} target="_blank" rel="noopener noreferrer"><i className="fas fa-play" styles={{ paddingLeft: `10px`, fontSize: `24px` }}></i> Check Out Demo Site</a></div>
                        </div>
                    </div>
                </section>
            </main>
        )
    }
}

export default Catalog;
