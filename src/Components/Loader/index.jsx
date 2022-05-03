import React from 'react';
import './styles.css';

function Loader() {

    return (
        <div className="objectLoaderContainer">
            <div className="spinner">
                <div className="double-bounce1"></div>
                <div className="double-bounce2"></div>
            </div>
        </div>
    )
}

export default Loader;