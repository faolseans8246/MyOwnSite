
import React, {useState} from "react";

import './header.css';
import LogoImage from '../../images/logo.jpg';
import DensityMediumIcon from '@mui/icons-material/DensityMedium';
import Brightness6Icon from '@mui/icons-material/Brightness6';


function header({onPageChange}) {

    const handlePageChange = (page) => {
        onPageChange(page);
    }

    return (

        <div className="header-container">

            <div className="logo-site">

                <img src={LogoImage} alt="-" className="logotipe" />

            </div>

            <div className="menu-site">

                <p className="menu-buttons">

                    <a href="#" className="home" onClick={() => handlePageChange("home")}>HOME</a>
                    <a href="#" className="texnologies" onClick={() => handlePageChange("texnology")}>TEXNOLOGIES</a>
                    <a href="#" className="resume" onClick={() => handlePageChange("myresume")}>RESUME</a>
                    <a href="#" className="contacts">CONTACT</a>
                    <a href="#" className="my-works">MY WORKS</a>
                    <a href="#" className="gallery">GALLERY</a>
                    <a href="#" className="about-me">ABOUT ME</a>

                </p>

            </div>


            <div className="avatar-site">
                
                <p className="rejim">
                    <button className="night-light">
                        <Brightness6Icon />
                    </button>
                    
                    <button className="list-pr">
                        <DensityMediumIcon />
                    </button>
                </p>

            </div>

        </div>

    )

}

export default header;