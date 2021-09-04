import React from 'react';
import * as main_picture from './images/main_picture.png';
import './main-page.css';
import {Link} from 'react-router-dom';

const MainPage = () => {
    const mn_picture = main_picture.default;

    return (
        <div className={"MainPage1"}>
            <h1 className="main-text">Organize your trip<br/>fast and comfortable.
            </h1>
            <h2 className="secondary-page">Business trip or vocation. With friends or alone.</h2>
            <img alt={'main_picture'} style={{
                position: "absolute",
                width: "458px",
                height: "565px",
                left: "1004px",
                top: "45px"
            }} src={mn_picture} />
            <Link to={"/login"}><button className="try-btn">Try for free</button></Link>
            <button className={"what-is-it-btn"}>What is it?</button>
        </div>
    );
}

export default MainPage;