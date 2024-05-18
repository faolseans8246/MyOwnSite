
import React   from "react";

import './body.css';
import myImage from '../../../images/kubiki.jpeg'; // Rasm faylini import qilish

function Body() {

    return (
        <div className="body-container">

            <div className="main-body-text">

                <h2 className="hi-text">Hi! My name is</h2>
                <h1 className="my-name">Feruzbek KHamroev</h1>
                <h3 className="about-me">I am developer</h3>

                <p className="short-about-me">
                    Hello, I am <b>Full-stack</b> developer and <code>IT specialist</code> I write code for programms
                    and device,<br/>
                    it is my job and I always try to write clean code. It is life and daily habit. I interesting this is
                    job becouse<br/>
                    it is job need for future and personal developing
                </p>

            </div>

            <div className="image-main">
                <img src={myImage} alt="Feruzbek's Image" className="my-image"/>
            </div>

        </div>
    )

}

export default Body;