
import React from "react";
import IMAGES from "../data/images";
import NavLink from "./NavLink";
import URLS from "../data/urls";

const Footer = props => (
    <footer className="dark-bg footer">
        <div className="footer-top">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="p-25px-b"><img alt="" className="logo-footer" src={IMAGES.logo} title="" /></div>

                        <p className="white-color-light">KadoSoft is a software company that help people to transforming their business in Digital Economy era. Our mission is to empowering business by providing software &amp; e-commerce solution with cutting edge technology.</p>

                        <div className="social-icon si-30 white round nav">
                            {/* <a href="#"><i className="fab fa-facebook-f"></i></a> */}
                            <a href={URLS.FB} target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-f"></i></a>
                            <a href={URLS.IG} target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
                            <a href={URLS.LINKED} target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin-in"></i></a>
                        </div>
                        {/* 
                        <div className="social-icon si-30 white round nav"></div> */}
                    </div>

                    <div className="col-lg-2 col-4 col-sm-4 ml-lg-auto m-15px-tb">
                        <h5 className="white-color footer-title">Our Office</h5>

                        <div>
                            <p className="white-color-light">Headquarter Jl. Prof. Eyckman no.28 paviliun, Pasteur, West Java, Indonesia. 40161</p>
                        </div>

                        <ul className="list-unstyled links-white footer-link-1">
                        </ul>
                    </div>

                    <div className="col-lg-2 col-4 col-sm-4 m-15px-tb">
                        <h5 className="white-color footer-title">Link</h5>

                        <ul className="list-unstyled links-white footer-link-1">
                            <li style={{ display: "inline-block" }}><NavLink href="/about-us" className="m-0 p-0">About Us </NavLink></li>
                            <br />
                            <li style={{ display: "inline-block" }}><NavLink href="/service" className="m-0 p-0">Service </NavLink></li>
                            <br />
                            <li style={{ display: "inline-block" }}><NavLink href="/catalog" className="m-0 p-0">Catalog </NavLink></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

        <div className="footer-bottom border-style top light">
            <div className="container">
                <div className="row">
                    <div className="col-md-12 text-center text-md-right m-5px-tb">
                        <p className="m-0px font-small white-color-light">KadoSoft&copy; 2020 copyright all right reserved</p>
                    </div>
                </div>
            </div>
        </div>
    </footer>
);


export default Footer;
