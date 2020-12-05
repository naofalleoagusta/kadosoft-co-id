import React from 'react';
import IMAGES from "../data/images";


const Profile = (props) => {
    return (<div className="col-sm-6 col-lg-3 m-15px-tb">
        <div className="our-team">
            <div className="team-img black-after">
                <img src={IMAGES.about.defaultProfile} title="" alt="" />
                {/* <div className="team-desc">
                    <div className="social-icon si-30 white radius nav">
                        <a href="/"><i className="fab fa-facebook-f"></i></a>
                        <a href="/"><i className="fab fa-twitter"></i></a>
                        <a href="/"><i className="fab fa-linkedin-in"></i></a>
                        <a href="/"><i className="fab fa-instagram"></i></a>
                    </div>
                </div> */}
            </div>
            <div className="team-info">
                <h6 className="m-5px-b">{props.name}</h6>
                <p className="m-0px font-1">{props.roles}</p>
            </div>
        </div>
    </div>)
}

const TechLogos = (props) => {
    return (
        <div className="col-6 col-lg-3">
            <div className="md-p-20px p-40px text-center">
                <img src={props.img} title="" alt="" />
            </div>
        </div>);
}

class AboutUs extends React.Component {
    render() {
        return (
            <main>
                <section className="section parallax effect-section about-us-background">
                    <div className="mask dark-bg opacity-4"></div>
                    <div className="container position-relative">
                        <div className="row align-items-center justify-content-center">
                            <div className="col-lg-8 text-center">
                                <h1 className="display-4 white-color m-0px">About Us</h1>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="section gray-bg">
                    <div className="container">
                        <div className="row">
                            <div className="row justify-content-center md-m-25px-b m-40px-b">
                                <div className="col-lg-8 text-center">
                                    <h3 className="h1 m-15px-b">Who We Are</h3>
                                    <p className="m-0px font-2">KadoSoft is a software company that help people transforming their business in Digital Economy era. Our mission is empowering business by providing software & e-commerce solution with cutting edge technology.</p>
                                </div>
                            </div>
                            <div className="col-lg-4 m-15px-tb">
                                <div className="box-shadow p-65px-tb p-45px-lr hover-top white-bg">
                                    <div className="m-30px-b icon-70">
                                        <img src={IMAGES.about.about3} title="" alt="" />
                                    </div>
                                    <h5 className="m-15px-b">Integrity </h5>
                                    <p className="m-0px">We are honest, open, trust in people, ethical, and fair.</p>
                                    <div className="p-25px-t">
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 m-15px-tb">
                                <div className="box-shadow p-65px-tb p-45px-lr hover-top white-bg">
                                    <div className="m-30px-b icon-70">
                                        <img src={IMAGES.about.about1} title="" alt="" />
                                    </div>
                                    <h5 className="m-15px-b">Agility</h5>
                                    <p className="m-0px">We are perseverance, bold & fast, innovative, passionate to improve and change.</p>
                                    <div className="p-25px-t">
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 m-15px-tb">
                                <div className="box-shadow p-65px-tb p-45px-lr hover-top white-bg">
                                    <div className="m-30px-b icon-70">
                                        <img src={IMAGES.about.about2} title="" alt="" />
                                    </div>
                                    <h5 className="m-15px-b">Client Success</h5>
                                    <p className="m-0px">Customer oriented solution.</p>
                                    <div className="p-25px-t">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <div className="section">
                    <div className="container">
                        <div className="row justify-content-center md-m-25px-b m-40px-b">
                            <div className="col-lg-8 text-center">
                                <h3 className="h1 m-15px-b">Tech Expertise</h3>
                            </div>
                        </div>
                        <div className="row separated">
                            <TechLogos img={IMAGES.about.tech.react}/>
                            <TechLogos img={IMAGES.about.tech.kubernet}/>
                            <TechLogos img={IMAGES.about.tech.gql}/>
                            <TechLogos img={IMAGES.about.tech.node}/>
                            <TechLogos img={IMAGES.about.tech.postgre}/>
                            <TechLogos img={IMAGES.about.tech.docker}/>
                            <TechLogos img={IMAGES.about.tech.flutter}/>
                            <TechLogos img={IMAGES.about.tech.github}/>
                            <TechLogos img={IMAGES.about.tech.php}/>
                            <TechLogos img={IMAGES.about.tech.laravel}/>
                            <TechLogos img={IMAGES.about.tech.js}/>
                            <TechLogos img={IMAGES.about.tech.mysql}/>
                        </div>
                    </div>
                </div>
                <section className="section gray-bg">
                    <div className="container">
                        <div className="row md-m-25px-b m-40px-b justify-content-center">
                            <div className="col-lg-8 text-center">
                                <h6 className="theme-color">Our Team</h6>
                                <h3 className="h1 m-15px-b">Meet the Profesional </h3>
                                <p className="m-0px font-2">Our Business & Tech Professional work together and focus on accelerate growth</p>
                            </div>
                        </div>
                        <div className="row">
                            <Profile name="Suryatin Setiawan" roles="Founder Kadoqu Group" />
                            <Profile name="Ari Wibowo" roles="CEO KadoSoft" />
                            <Profile name="Boediono" roles="Company Advisor" />
                        </div>
                    </div>
                </section>
            </main>
        )
    }
}

export default AboutUs;
