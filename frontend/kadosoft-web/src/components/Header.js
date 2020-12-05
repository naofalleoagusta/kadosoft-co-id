import React from "react";
import NavLink from "./NavLink";
import Collapse from 'react-bootstrap/Collapse';
import MediaQuery from "react-responsive";
import {
    MIN_DESKTOP_SIZE
} from "../data/constants";
import IMAGES from "../data/images";
import { withRouter } from "react-router-dom";


class Header extends React.Component {

    constructor(props) {
        super(props);
        this.listener = null;
        this.state = {
            status: "top",
            open: false
        };
    }

    componentDidMount() {
        this.listener = document.addEventListener("scroll", e => {
            var scrolled = document.scrollingElement.scrollTop;
            if (scrolled >= 100) {
                if (this.state.status !== "not-top") {
                    this.setState({ status: "not-top" });
                }
            } else {
                if (this.state.status !== "top") {
                    this.setState({ status: "top" });
                }
            }
        });
    }

    componentDidUpdate() {
        document.removeEventListener("scroll", this.listener);
    }

    render() {
        let path =this.props.location.pathname;
        return (

            <MediaQuery minWidth={MIN_DESKTOP_SIZE}>
                {isDesktop => {
                    return (<header className={`${(path !== "/" && path !== "/contact-us") && "header-height header-bg min-header"} header-nav header-dark ${this.state.status !== "top" && "fixed-header"}`}>
                        <div className="fixed-header-bar">
                            <div className="navbar navbar-main navbar-expand-lg">
                                <div className="container">
                                    <NavLink href="/" className="px-0">
                                        <img alt="" className="logo-header" src={IMAGES.logo} title="" />
                                    </NavLink>
                                    <button aria-controls="navbar-main-collapse"
                                        onClick={() => this.setState({ open: !this.state.open })}
                                        aria-expanded={this.state.open} aria-label="Toggle navigation" className="navbar-toggler"
                                        data-toggle="collapse" type="button">
                                        <span className="navbar-toggler-icon"></span>
                                    </button>
                                    <Collapse in={this.state.open}>
                                        <div className="navbar-collapse navbar-collapse-overlay" id="navbar-main-collapse">
                                            <ul className="navbar-nav ml-auto" onClick={() => !isDesktop && this.setState({ open: !this.state.open })}>
                                                <li className="nav-item"><NavLink className="nav-link" href="/" >Home</NavLink></li>
                                                <li className="nav-item"><NavLink className="nav-link" href="/service">Service</NavLink></li>
                                                <li className="nav-item"><NavLink className="nav-link" href="/catalog">Catalog</NavLink></li>
                                                <li className="nav-item"><NavLink className="nav-link" href="/about-us">About</NavLink></li>
                                                <li className="nav-item"><NavLink className="nav-link" href="/contact-us">Contact</NavLink></li>
                                            </ul>
                                        </div>
                                    </Collapse>
                                </div>
                            </div>
                        </div>
                    </header >
                    );
                }}
            </MediaQuery>
        );
    }
}


export default withRouter(Header);