import React, {useState} from "react";
import './dashboard.css'


import Header from "./header/header"
import Footer from "./footer/footer"

import Body from "./body/home/body"
import Texnology  from "./body/texnology/texnologies"
import Myresume from "./body/resume/mycontacts";


function Dashboard() {

    const [currentPage, setCurrentPage] = useState("home");

    const handlePageChange = (page) => {
        setCurrentPage(page);
    }

    return (

        <div className="dash-container">

            <Header onPageChange={handlePageChange} />

            {currentPage === "home" && <Body />}
            {currentPage === "texnology" && <Texnology />}
            {currentPage === "myresume" && <Myresume />}

            <Footer />

        </div>

    )

}

export default Dashboard;