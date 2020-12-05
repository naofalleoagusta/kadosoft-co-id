import React from "react";
import NavLink from './NavLink';

const AppPreview = (props) => {
    return (
        <div className="grid-item product branding">
            <div className="portfolio-box-01">
                <div className="portfolio-info">
                    <h5><NavLink href="/" className="p-0">{props.name}</NavLink></h5>
                    <span>{props.desc}</span>
                    <div>
                        {/* <NavLink href="/" className="m-link-white gallery-link view-app">
                            View
                    </NavLink> */}
                    </div>
                </div>
                <div className="portfolio-img">
                    <img src={props.src} title="" alt="" className="preview-apps-img"/>
                </div>
            </div>
        </div>);
}


export default AppPreview;