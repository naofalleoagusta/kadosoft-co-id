import React from 'react';
import IMAGES from "../data/images";
import { withApollo } from "react-apollo";
import { MUTATION_ADD_USER } from "../gql/user";
import {MUTATION_SEND_CATALOG_EMAIL} from "../gql/mail";
import Swal from 'sweetalert2';

class ContactUs extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            email: "",
            phone: "",
            message: "",
            company: ""
        }
    }

    onSubmitAddUser = (e) => {
        e.preventDefault();
        let name = this.state.name;
        let email = this.state.email;
        let phone = this.state.phone;
        let message = this.state.message;
        let company = this.state.company;
        console.log(
            name, email, phone, message, company
        )
        this.props.client.mutate({
            mutation: MUTATION_ADD_USER,
            variables: {
                name: name,
                email: email,
                phone: phone,
                company: company,
                message: message
            }
        }).then(res => {
            this.props.client.mutate({
                mutation:MUTATION_SEND_CATALOG_EMAIL,
                variables:{
                    to:email
                }
            })
            Swal.fire({
                title: '<strong>Terimakasih Telah Mengisi Form Kami</strong>',
                icon: 'success',
                html:
                    'Terimakasih telah mengisi kami , Kami telah mengirimkan catalog kami ke email kamu !! ' ,
                showCloseButton: true,
                showCancelButton: false,
                focusConfirm: false,
                confirmButtonText:
                    '<a href="https://drive.google.com/file/d/1V0O9T4smjtsdcWSJJcorW9wEqbRiez4u/view?usp=sharing" target="_blank">Great</a>',
                confirmButtonColor: '#ffd662ff',
                confirmButtonAriaLabel: 'Thumbs up, great!'
            })

        })
    }
    render() {
        return (
            <main>
                <section className="section parallax effect-section contact-us-background">
                    <div className="mask dark-bg opacity-4"></div>
                    <div className="container position-relative">
                        <div className="row align-items-center justify-content-center">
                            <div className="col-lg-8 text-center">
                                <h1 className="display-4 white-color m-0px">Contact Us</h1>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="section gray-bg">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-4 m-15px-tb">
                                <div className="box-shadow p-65px-tb p-40px-lr hover-top white-bg">
                                    <div className="m-30px-b only-icon-70 theme-color"></div>
                                    <div className="batas"><img alt="" className="gambar-icon" src={IMAGES.contact.icon1} title="" />
                                    </div>
                                    <h5 className="m-15px-b">HQ Address</h5>

                                    <p className="m-0px">Jl. Prof. Eyckman no.28 paviliun, Bandung, West Java, Indonesia. 40163</p>
                                </div>
                            </div>

                            <div className="col-lg-4 m-15px-tb">
                                <div className="box-shadow p-65px-tb p-40px-lr hover-top white-bg">
                                    <div className="m-30px-b only-icon-70 theme-color"></div>
                                    <div className="batas"><img alt="" className="gambar-icon" src={IMAGES.contact.icon2} title="" />
                                    </div>
                                    <h5 className="m-15px-b">Contact Us</h5>

                                    <p className="m-0px">+62&nbsp;81389007338</p>
                                </div>
                            </div>

                            <div className="col-lg-4 m-15px-tb">
                                <div className="box-shadow p-65px-tb p-40px-lr hover-top white-bg">
                                    <div className="m-30px-b only-icon-70 theme-color"></div>
                                    <div className="batas"><img alt="" className="gambar-icon" src={IMAGES.contact.icon3} title="" />
                                    </div>
                                    <h5 className="m-15px-b">Email Us</h5>

                                    <p className="m-0px links-dark"><a href="mailto:support@kadosoft.co.id
                                ">support@kadosoft.co.id</a></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>


                <section className="section" id="#get-in-touch">
                    <div className="container">
                        <div className="row md-m-25px-b m-40px-b justify-content-center">
                            <div className="col-lg-7 text-center">
                                <h3 className="h1 m-15px-b p-15px-b after-50 theme-after">Get in touch!</h3>

                                <p className="m-0px font-2">Want to know more? Let&rsquo;s discuss your needs to discover the best
							solution.</p>
                            </div>
                        </div>

                        <div className="row justify-content-center">
                            <div className="col-md-10 col-lg-9 col-xl-8">
                                <form onSubmit={this.onSubmitAddUser} className="rd-mailform"
                                    data-form-output="form-output-global" data-form-type="contact" method="post">
                                    <div className="form-row">
                                        <div className="col-sm-6">
                                            <div className="form-group"><label>Your Name</label> <input
                                                className="form-control" data-constraints="@Required" id="contact-name"
                                                name="name" placeholder="Rachel Roth" type="text" required={true} onChange={e => {
                                                    let inputUser = e.target.value;
                                                    this.setState({
                                                        name: inputUser
                                                    })
                                                }} /></div>
                                        </div>

                                        <div className="col-sm-6">
                                            <div className="form-group"><label>Email Address</label> <input
                                                className="form-control" data-constraints="@Required" id="contact-email"
                                                name="email" placeholder="name@example.com" type="email" required={true} onChange={e => {
                                                    let inputUser = e.target.value;
                                                    this.setState({
                                                        email: inputUser
                                                    })
                                                }} /></div>
                                        </div>

                                        <div className="col-sm-6">
                                            <div className="form-group"><label >Company (optional)</label>
                                                <input className="form-control" id="contact-company" name="contact-company"
                                                    type="text" onChange={e => {
                                                        let inputUser = e.target.value;
                                                        this.setState({
                                                            company: inputUser
                                                        })
                                                    }} /></div>
                                        </div>

                                        <div className="col-sm-6">
                                            <div className="form-group"><label >Phone (optional)</label> <input
                                                className="form-control" id="contact-phone" name="contact-phone" type="tel"
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
                                                value={this.state.phone} />
                                            </div>
                                        </div>

                                        <div className="col-12">
                                            <div className="form-group"><label >Message</label><textarea
                                                className="form-control" data-constraints="@Required" id="contact-message"
                                                name="message" placeholder="Hi there, I would like to ..."
                                                rows="3" required={true} onChange={e => {
                                                    let inputUser = e.target.value;
                                                    this.setState({
                                                        message: inputUser
                                                    })
                                                }} ></textarea></div>
                                        </div>

                                        <div className="col-12"><button className="m-btn m-btn-theme m-btn-radius w-100" name="send"
                                            type="submit">Get Started</button>

                                            <div className="snackbars" id="form-output-global"></div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>

                <div className="map-sm">
                    <div className="embed-responsive embed-responsive-16by9 h-100">
                        <div style={{ width: "100%" }}><iframe title="KadoSoft Headquarter" frameBorder="0" height="600" marginHeight="0" marginWidth="0"
                            scrolling="no"
                            src="https://maps.google.com/maps?q=Jl.%20Prof.%20Eyckman%20No.28P%2C%20Pasteur%2C%20Kec.%20Sukajadi%2C%20Kota%20Bandung%2C%20Jawa%20Barat%2040161%2C%20Indonesia&t=&z=13&ie=UTF8&iwloc=&output=embed"
                            width="100%">Google Maps radius calculator</iframe></div>
                    </div>
                </div>
            </main>
        )
    }
}

export default withApollo(ContactUs);
