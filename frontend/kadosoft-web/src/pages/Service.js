import React from 'react';
import IMAGES from "../data/images";

class Service extends React.Component {
    render() {
        return (
            <main>
                <section className="section parallax effect-section service-background">
                    <div className="mask dark-bg opacity-4"></div>
                    <div className="container position-relative">
                        <div className="row align-items-center justify-content-center">
                            <div className="col-lg-8 text-center">
                                {/* <h6 className="white-color-light font-w-500"></h6> */}
                                <h1 className="display-4 white-color m-0px">Our Service</h1>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="section gray-bg">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-6 m-15px-tb">
                                {/* <!-- <h6 className="theme-color m-10px-b">We are KadoSoft</h6> --> */}
                                <h3 className="h1 m-20px-b">Customer Oriented Service
                    </h3>
                                <p className="m-0px">Get the ultimate tool and learn how to grow your audience and build an online business.</p>
                                <div className="p-25px-t row">
                                    <div className="col-sm-6">
                                        <ul className="list-type-01">
                                            <li>Business Consultation </li>
                                            <li>User friendly platform </li>
                                            <li>Secure & reliable system</li>
                                            <li>24/7 IT Support</li>
                                            <li>UI/UX best practice</li>
                                        </ul>
                                    </div>
                                    <div className="col-sm-6">
                                        <ul className="list-type-01">
                                            <li>Excellence system maintenance</li>
                                            <li>Reasonable pricing</li>
                                            <li>Mobile friendly</li>
                                            <li>Use latest technology</li>
                                            <li>Well documented code</li>
                                        </ul>
                                    </div>
                                </div>
                                {/* <!-- <div className="p-30px-t">
                        <a className="m-link-theme font-w-500" href="#">Getting Started Docs</a>
                    </div> --> */}
                            </div>
                            <div className="col-lg-6 ml-lg-auto align-self-center m-15px-tb">
                                <img className="service-image" src={IMAGES.service.custnew} title="" alt="" />
                            </div>
                        </div>
                    </div>
                </section>

                <section className="section p-50px-t">
                    <div className="container">
                        <div className="row justify-content-center md-m-25px-b m-40px-b">
                            <div className="col-lg-8 text-center">
                                <h3 className="h1 m-15px-b">How We Work</h3>
                                <p className="m-0px font-2">Getting your solution ready with some easy steps</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-6 col-lg-3 m-15px-tb">
                                <div className="p-40px-tb p-20px-lr text-center border-radius-10 hover-top box-shadow-lg">
                                    <div className="batas">
                                        <img className="gambar-icon" src={IMAGES.service.icon1} title="" alt="" />
                                    </div>
                                    <h6>Discuss</h6>
                                    <p className="m-0px">Tell us your needs to improve your business system & growth</p>
                                </div>
                            </div>
                            <div className="col-sm-6 col-lg-3 m-15px-tb">
                                <div className="p-40px-tb p-20px-lr text-center border-radius-10 hover-top box-shadow-lg">
                                    <div className="batas">
                                        <img className="gambar-icon" src={IMAGES.service.icon2} title="" alt="" />
                                    </div>
                                    <h6>Design</h6>
                                    <p className="m-0px">We’ll design your platform with UI/UX best practice</p>
                                </div>
                            </div>
                            <div className="col-sm-6 col-lg-3 m-15px-tb">
                                <div className="p-40px-tb p-20px-lr text-center border-radius-10 hover-top box-shadow-lg">
                                    <div className="batas">
                                        <img className="gambar-icon" src={IMAGES.service.icon3} title="" alt="" />
                                    </div>
                                    <h6>Develop & Test</h6>
                                    <p className="m-0px">We build with latest technology to create secure and reliable system</p>
                                </div>
                            </div>
                            <div className="col-sm-6 col-lg-3 m-15px-tb">
                                <div className="p-40px-tb p-20px-lr text-center border-radius-10 hover-top box-shadow-lg">
                                    <div className="batas">
                                        <img className="gambar-icon" src={IMAGES.service.icon4} title="" alt="" />
                                    </div>
                                    <h6>Deploy</h6>
                                    <p className="m-0px">Launch your online platform and accelerate business</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        )
    }
}

export default Service;
