
import React from "react";
import './mycontacts.css';

function Mycontacts() {

    return (

        <div className="contact-container">

            <div className="cv-part">

                <a href="#" className="block-bar">
                    <div className="main-cv">
                        <h2>Front-End</h2>
                    </div>

                    <div className="text-part">
                        <p className="cv-text">
                            Bu qismda mening front end soft-skilim haqida ma'lumot va u haqda resume joylashtiriladi,
                            bu resumeda mening front-end dasturlash texnologiyasi haqida to'liq ma'lumotlarim va
                            tajribalarim yozilgan pdf file bo'lib u saytdan yuklab olinadi va buning uchun mana shu
                            chegaralangan qism ustiga bosish kerak va siz bu faylni yuklab olasiz.
                            Front-end uchun zarur bo'ladigan barcha biladigan texnologiyalarim mana shu qismga yoziladi
                            va foydalanuvchi buni o'zi ko'radi va yuklab oladi.
                        </p>
                    </div>

                </a>

                <a href="#" className="block-bar">
                    <div className="main-cv">
                        <h2>Back-End</h2>
                    </div>

                    <div className="logo-part">
                        <p className="cv-text">
                            Bu qismda mening back end soft-skilim haqida ma'lumot va u haqda resume joylashtiriladi,
                            bu resumeda mening front-end dasturlash texnologiyasi haqida to'liq ma'lumotlarim va
                            tajribalarim yozilgan pdf file bo'lib u saytdan yuklab olinadi va buning uchun mana shu
                            chegaralangan qism ustiga bosish kerak va siz bu faylni yuklab olasiz.
                            Back-end uchun zarur bo'ladigan barcha biladigan texnologiyalarim mana shu qismga yoziladi
                            va foydalanuvchi buni o'zi ko'radi va yuklab oladi.
                        </p>
                    </div>
                </a>

                <a href="#" className="block-bar">
                    <div className="main-cv">
                        <h2>Data-Science</h2>
                    </div>

                    <div className="logo-part">
                        <p className="cv-text">
                            Bu qismda mening Data science soft-skilim haqida ma'lumot va u haqda resume joylashtiriladi,
                            bu resumeda mening front-end dasturlash texnologiyasi haqida to'liq ma'lumotlarim va
                            tajribalarim yozilgan pdf file bo'lib u saytdan yuklab olinadi va buning uchun mana shu
                            chegaralangan qism ustiga bosish kerak va siz bu faylni yuklab olasiz.
                            Data-science uchun zarur bo'ladigan barcha biladigan texnologiyalarim mana shu qismga yoziladi
                            va foydalanuvchi buni o'zi ko'radi va yuklab oladi.
                        </p>
                    </div>
                </a>

            </div>

        </div>

    )

}

export default Mycontacts;