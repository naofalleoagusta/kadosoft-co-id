import React from 'react';
import NavLink from '../components/NavLink';
import CatalogPreview from '../components/CatalogPreview';
import { withApollo } from "react-apollo";
import { MUTATION_ADD_USER } from "../gql/user";
import { MUTATION_SEND_CATALOG_EMAIL } from "../gql/mail";
import Swal from 'sweetalert2';
import IMAGES from "../data/images";
import URLS from "../data/urls";
import { PHONE_NUMBER, EMAIL } from "../data/contacts";
class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            email: "",
            phone: ""
        }
    }
    onSubmitAddUser = (e) => {
        e.preventDefault();
        let name = this.state.name;
        let email = this.state.email;
        let phone = this.state.phone;
        this.props.client.mutate({
            mutation: MUTATION_ADD_USER,
            variables: {
                name: name,
                email: email,
                phone: phone
            }
        }).then(res => {
            Swal.fire({
                title: '<strong>Terimakasih Telah Mengisi Form Kami</strong>',
                icon: 'success',
                html:
                    'Terimakasih telah mengisi kami , Kami telah mengirimkan catalog kami ke email kamu !! ',
                showCloseButton: true,
                showCancelButton: false,
                focusConfirm: false,
                confirmButtonText:
                    '<a href="https://drive.google.com/file/d/1V0O9T4smjtsdcWSJJcorW9wEqbRiez4u/view?usp=sharing" target="_blank">Great</a>',
                confirmButtonColor: '#ffd662ff',
                confirmButtonAriaLabel: 'Thumbs up, great!'
            })
            this.props.client.mutate({
                mutation: MUTATION_SEND_CATALOG_EMAIL,
                variables: {
                    to: email
                }
            })

        })
    }
    render() {
        return (
            <main>
                <section className="theme-g-bg effect-section">
                    <div className="container">
                        <div className="row align-items-center p-100px-t justify-content-center">
                            <div className="col-lg-6 m-50px-tb">
                                <h6 className="dark-bg p-5px-tb p-15px-lr d-inline-block white-color border-radius-15 m-25px-b">
                                    Featured Services</h6>

                                <h1 className="display-4 m-20px-b ">Digital solution for your business</h1>

                                <p className="font-2">Transform your business, scale up and win the competition in digital era.</p>

                                <div className="p-20px-t m-btn-wide"><NavLink className="m-btn m-btn-radius m-btn-orange m-10px-r"
                                    href="/contact-us"><span className="m-btn-inner-text">Get Started</span></NavLink></div>
                            </div>

                            <div className="col-lg-6">

                            </div>
                        </div>
                    </div>
                </section>

                <section className="section effect-section">
                    {/* <div className="effect-2"><img alt="" className="svg_img gray-color" src={require("../assets/img/effect/style-1.svg")} title="" />
                    </div> */}

                    <div className="container">
                        <div className="row justify-content-center md-m-25px-b m-40px-b">
                            <div className="col-lg-8 text-center">
                                <h3 className="h1 m-15px-b">Build your e-commerce platform</h3>

                                <p className="m-0px font-2">Reach greater market, get more leads.</p>
                            </div>
                        </div>

                        <div className="row justify-content-between">
                            <div className="col-lg-6 m-15px-tb"><img alt="" className="wedo-icon" src={IMAGES.home.wedonew} title="" /></div>

                            <div className="col-lg-5 m-15px-tb">
                                <div className="media box-shadow-lg p5 m-30px-b">
                                    <div className="batas"><img alt="" className="gambar-icon-we-do" src={IMAGES.home.wedo1} title="" />
                                    </div>
                                    <div className="media-body p-15px-l">
                                        <h5>Website Development</h5>

                                        <p className="m-0px">Build website for your company profile </p>
                                    </div>
                                </div>

                                <div className="media box-shadow-lg p5 m-30px-b">
                                    <div className="batas"><img alt="" className="gambar-icon-we-do" src={IMAGES.home.wedo2} title="" />
                                    </div>
                                    <div className="media-body p-15px-l">
                                        <h5>E-commerce</h5>

                                        <p className="m-0px">Build e-commerce apps for desktop &amp; mobile users</p>
                                    </div>
                                </div>

                                <div className="media box-shadow-lg p5">
                                    <div className="batas"><img alt="" className="gambar-icon-we-do" src={IMAGES.home.wedo3} title="" />
                                    </div>
                                    <div className="media-body p-15px-l">
                                        <h5>Social Media</h5>

                                        <p className="m-0px">Manage your social media account</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="section p-50px-t">
                    <div className="container">
                        <div className="row justify-content-center md-m-25px-b m-40px-b">
                            <div className="col-lg-8 text-center">
                                <h3 className="h1 m-15px-b">Service Excellence</h3>

                                <p className="m-0px font-2">Our dedicated service to build your system</p>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-sm-6 col-lg-3 m-15px-tb">
                                <div className="p-40px-tb p-20px-lr text-center border-radius-10 hover-top box-shadow-lg">
                                    <div className="batas"><img alt="" className="gambar-icon" src={IMAGES.home.value1} title="" />
                                    </div>

                                    <h6>Well Documented</h6>

                                    <p className="m-0px"></p>
                                </div>
                            </div>

                            <div className="col-sm-6 col-lg-3 m-15px-tb">
                                <div className="p-40px-tb p-20px-lr text-center border-radius-10 hover-top box-shadow-lg">
                                    <div className="batas"><img alt="" className="gambar-icon" src={IMAGES.home.value2} title="" />
                                    </div>

                                    <h6>24/7 IT Support</h6>

                                    <p className="m-0px"></p>
                                </div>
                            </div>

                            <div className="col-sm-6 col-lg-3 m-15px-tb">
                                <div className="p-40px-tb p-20px-lr text-center border-radius-10 hover-top box-shadow-lg">
                                    <div className="batas"><img alt="" className="gambar-icon" src={IMAGES.home.value3} title="" />
                                    </div>

                                    <h6>User Friendly System</h6>

                                    <p className="m-0px"></p>
                                </div>
                            </div>

                            <div className="col-sm-6 col-lg-3 m-15px-tb">
                                <div className="p-40px-tb p-20px-lr text-center border-radius-10 hover-top box-shadow-lg">
                                    <div className="batas"><img alt="" className="gambar-icon" src={IMAGES.home.value4} title="" />
                                    </div>

                                    <h6>Secured &amp; Reliable Technology</h6>

                                    <p className="m-0px"></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="section gray-bg">
                    <div className="container">
                        <div className="row md-m-25px-b m-40px-b justify-content-center">
                            <div className="col-lg-8 text-center">
                                <h3 className="h1 m-15px-b p-15px-b after-50 theme-after">Best solution</h3>
                                <p className="m-0px font-2">
                                    Our platform for any businesses, fashion, food, retail and many more.
                                </p>
                            </div>
                        </div>

                        {/*<div className="portfolio-filter-01 m-15px-t m-20px-b md-m-10px-b">*/}
                        {/*    <ul className="filter justify-content-center nav">*/}
                        {/*        <li className="active" data-filter="*">All</li>*/}
                        {/*        <li data-filter=".branding">Web Dev</li>*/}
                        {/*        <li data-filter=".photoshop">E-Commerce</li>*/}
                        {/*        <li data-filter=".fashion">Social Media</li>*/}
                        {/*    </ul>*/}
                        {/*</div>*/}

                        <div className="portfolio-content grid-gutter-lg grid-col-3 lightbox-gallery">
                            <CatalogPreview />
                        </div>
                        <div className="text-center">
                            <a className="m-btn m-btn-theme m-btn-radius w-50 center mt-5" name="send"
                                href="#contact-us">Contact Us Now!</a>
                        </div>
                    </div>
                </section>
                <section className="parallax effect-section p-40px-tb background">
                    <div className="mask black-bg opacity-8"></div>

                    <div className="container position-relative">
                        <div className="row align-items-center">
                            <div className="col-lg-8 col-md-7 m-15px-tb text-md-left text-center">
                                <h3 className="white-color m-0px">Need custom solution system for enterprise?</h3>
                            </div>

                            <div className="col-lg-4 col-md-5 m-15px-tb text-md-right text-center"><a
                                className="m-btn m-btn-t-white m-btn-radius" href={URLS.WA} target="_blank" rel="noopener noreferrer">Chat with us <i className="fab fa-whatsapp"
                                    styles={{ paddingLeft: `10px`, fontSize: `24px` }}></i> </a></div>
                        </div>
                    </div>
                </section>
                <section id="contact-us" className="section bg-no-repeat bg-right-center" styles={{ backgroundImage: `url(../assets/img/about-us.png)` }}>
                    <div className="container">
                        <div className="row md-m-25px-b m-40px-b">
                            <div className="col-lg-8">
                                <h3 className="h1 m-15px-b">Reach out now!</h3>

                                <p className="m-0px font-2">Want to know more? Let&rsquo;s discuss your needs to discover the best
                        solution.</p>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-lg-6 m-15px-tb">
                                <form onSubmit={this.onSubmitAddUser} className="rd-mailform">
                                    <div className="form-row">
                                        <div className="col-sm-6">
                                            <div className="form-group"><input className="form-control" data-constraints="@Required"
                                                id="contact-name" name="name" placeholder="Name" type="text" required={true} onChange={e => {
                                                    let inputUser = e.target.value;
                                                    this.setState({
                                                        name: inputUser
                                                    })
                                                }} /></div>
                                        </div>

                                        <div className="col-sm-6">
                                            <div className="form-group"><input className="form-control" data-constraints="@Required"
                                                id="contact-email" name="email" placeholder="name@example.com" required={true} onChange={(e) => {
                                                    let inputUser = e.target.value;
                                                    this.setState({
                                                        email: inputUser
                                                    })
                                                }} value={this.state.email}
                                                type="email" /></div>
                                        </div>

                                        <div className="col-sm-12">
                                            <div className="form-group"><input className="form-control" data-constraints="@Required"
                                                id="contact-subject" name="phone" placeholder="Phone" required={true} type="text"
                                                onChange={e => {
                                                    const re = /^[0-9]*$/;
                                                    if (
                                                        re.test(e.target.value) ||
                                                        e.target.value === ""
                                                    ) {
                                                        this.setState({
                                                            phone: e.target.value
                                                        });
                                                    }
                                                }}
                                                value={this.state.phone}
                                            />
                                            </div>
                                        </div>

                                        <div className="col-12"><button className="m-btn m-btn-theme m-btn-radius w-100" name="send"
                                            type="submit">Contact Us Now!</button>

                                            <div className="snackbars" id="form-output-global"></div>
                                        </div>
                                    </div>
                                </form>
                            </div>

                            <div className="col-lg-5 m-15px-tb ml-auto">
                                <h5 className="m-20px-b body-color">Let&#39;s talk!</h5>

                                <div className="h1 theme-color"></div>

                                <div className="media align-items-center p-10px-tb">
                                    <div className="icon-40 theme-bg-alt border-radius-50 theme-color"><i className="fas fa-phone"></i></div>

                                    <div className="media-body p-15px-l">
                                        <h6 className="h4 m-0px">{PHONE_NUMBER}</h6>
                                    </div>
                                </div>

                                <div className="media align-items-center p-10px-tb">
                                    <div className="icon-40 theme-bg-alt border-radius-50 theme-color"><i className="fas fa-envelope-open"></i></div>

                                    <div className="media-body p-15px-l">
                                        <h6 className="h4 m-0px">{EMAIL}</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        )
    }
}

export default withApollo(Home);
