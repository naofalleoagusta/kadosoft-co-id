import React from "react";

const LoadingLayout = (props) => {
    return (
        <div id="loading" className="h-100 fallback-fadein">

            <div className="load-circle"><span className="one"></span></div>
        </div>
    );
}


export default LoadingLayout;