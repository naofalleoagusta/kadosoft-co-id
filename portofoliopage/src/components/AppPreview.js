import React from "react";


const AppPreview = (props) => {
    function redirectTo(link){
        window.location.href = link
    }
    return (
        <div onClick={ () => redirectTo(props.link)}  className="grid-item product branding">
            <div className="portfolio-box-01">
                <div className="portfolio-info">
                    <h5><p className="p-0">{props.name}</p></h5>
                    <span>{props.desc}</span>
                    <div>
                        <p  className="m-link-white gallery-link view-app">
                            View
                    </p>
                    </div>
                </div>
                <div className="portfolio-img">
                    <img src={props.src} title="" alt="" className="preview-apps-img"/>
                </div>
            </div>
        </div>);
}


export default AppPreview;