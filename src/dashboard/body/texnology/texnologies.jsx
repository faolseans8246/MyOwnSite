
import React from 'react';
import './texnologies.css';

// import icons
import {FaJava} from "@react-icons/all-files/fa/FaJava";
import {SiSpring} from "@react-icons/all-files/si/SiSpring";
import {SiCplusplus} from "@react-icons/all-files/si/SiCplusplus";
import {SiPython} from "@react-icons/all-files/si/SiPython";
import {SiJavascript} from "@react-icons/all-files/si/SiJavascript";
import {SiTypescript} from "@react-icons/all-files/si/SiTypescript";
import {SiKotlin} from "@react-icons/all-files/si/SiKotlin";
import {SiR} from "@react-icons/all-files/si/SiR";
import {SiHtml5} from "@react-icons/all-files/si/SiHtml5";
import {SiCss3} from "@react-icons/all-files/si/SiCss3";
import {SiBootstrap} from "@react-icons/all-files/si/SiBootstrap";
import {SiReact} from "@react-icons/all-files/si/SiReact";
import {SiLinux} from "@react-icons/all-files/si/SiLinux";
import {SiWindows} from "@react-icons/all-files/si/SiWindows";
import {SiPostgresql} from "@react-icons/all-files/si/SiPostgresql";
import {SiMysql}      from "@react-icons/all-files/si/SiMysql";
import {SiMariadb} from "@react-icons/all-files/si/SiMariadb";
import {SiGit} from "@react-icons/all-files/si/SiGit";
import {SiGithub} from "@react-icons/all-files/si/SiGithub";
import {SiGitlab} from "@react-icons/all-files/si/SiGitlab";
import {SiNodeDotJs} from "@react-icons/all-files/si/SiNodeDotJs";
import {SiWebpack} from "@react-icons/all-files/si/SiWebpack";
import {SiArduino} from "@react-icons/all-files/si/SiArduino";
import {SiPostman} from "@react-icons/all-files/si/SiPostman";
import {SiDjango} from "@react-icons/all-files/si/SiDjango";


function Texnology() {

    return (

        <div className="texnology-container">

            <div className="texnology-bar">

                <div className="bar">

                    <p className="main-text">
                        <FaJava className="java-icon" style={{color: "#2445A1FF"}}/> <b style={{fontSize: "35px", marginLeft: "20px"}}>Java</b>
                    </p>

                    <p className="softskil">
                        Men Java dasturlash tili bilan, 1 yildan buyon shug'ullanib kelaman va bu dasturlash tilini,
                        o'rganishim dasturlash tilining imkoniyatlar va darajasi hisoblanadi. Java dasturlash tili
                        bugungi kunda
                        top dasturlash tili.
                    </p>

                </div>

                <div className="bar">

                    <p className="main-text">
                        <SiSpring className="java-icon" style={{color: "green"}}/> <b
                        style={{fontSize: "35px", marginLeft: "20px"}}>Spring boot</b>
                    </p>

                    <p className="softskil">
                        Spring boot java dasturlahs tilining frameworki va bu dasturlash tili uchun web ilovalar,
                        application
                        va ma'lumotlar bazasi bilan bog'lanish uchun yordamchi dasturlar jamlanmasi.
                    </p>

                </div>

                <div className="bar">

                    <p className="main-text">
                        <SiCplusplus className="java-icon" style={{color: "blue"}}/> <b
                        style={{fontSize: "35px", marginLeft: "20px"}}>C/C++</b>
                    </p>

                    <p className="softskil">
                        C va C++ dasturlash tili bilan universitet bosqichida o'rganganman va bu tillar bilan, yetarli
                        ko'nikma
                        va bilimga egaman. C va C++ dasturlash tillar bilan algoritmlash uchun foydalanaman.
                    </p>

                </div>

                <div className="bar">

                    <p className="main-text">
                        <SiPython className="java-icon" style={{color: "#88EF09FF"}}/> <b
                        style={{fontSize: "35px", marginLeft: "20px"}}>Python</b>
                    </p>

                    <p className="softskil">
                        Python dasturlash tili kuchli dinamik til bo'lib bugungi kunda eng rivojlanib borayotgan til va
                        bu til bilan suniy intelekt va boshqa yuqori dasturlar yaratishda foydalaniladi.
                    </p>

                </div>

                {/*ikkinchi qator*/}
                <div className="bar">

                    <p className="main-text">
                        <SiJavascript className="java-icon" style={{color: "yellow"}}/> <b
                        style={{fontSize: "35px", marginLeft: "20px"}}>JavaScript</b>
                    </p>

                    <p className="softskil">
                        JavaScript dasturlash tili ham bugungi kunda top-1 o'rinni egallab turgan dasturlash tili va bu
                        dasturlash
                        tili bilan barcha sohada ish qilish mumkin. Bu dasturlash tili qulay va hamma yunalish uchun
                        o'zining
                        tayyor frameworklariga ega.
                    </p>

                </div>

                <div className="bar">

                    <p className="main-text">
                        <SiTypescript className="java-icon" style={{color: "blue"}}/> <b
                        style={{fontSize: "35px", marginLeft: "20px"}}>TypeScript</b>
                    </p>

                    <p className="softskil">
                        TypeScript dasturlash tili JavaScript dasturlash tilini statik va OOPga yo'naltirgan qismi. Bu
                        dasturlash tili bilan kodlarni aniq va foydalanuvchan yozish mumkin.
                    </p>

                </div>

                <div className="bar">

                    <p className="main-text">
                        <SiKotlin className="java-icon" style={{color: "#C809F3BA"}}/> <b
                        style={{fontSize: "35px", marginLeft: "20px"}}>Kotlin</b>
                    </p>

                    <p className="softskil">
                        Kotlin dasturlash tili Java dasturlash tilining yangilangan va qisman dinamiklashtirilgan
                        versiyasi,
                        bu dasturlash tili bilan android ilovalar yaratish va boshqa back-end qismlarni yozishda
                        foydalaniladi.
                    </p>

                </div>

                <div className="bar">

                    <p className="main-text">
                        <SiR className="java-icon" style={{color: "#0999F3BA"}}/> <b
                        style={{fontSize: "35px", marginLeft: "20px"}}>R-language</b>
                    </p>

                    <p className="softskil">
                        R dasturlash tili bu eng yuqori dinamiklik hususiyatiga ega va bu python bilan bir qatorda data
                        analitika bilan ishlashga moslashtirilgan. Bu orqali u data analitika qismi bilan ishlash uchun
                        eng samarali til hisoblanadi.
                    </p>

                </div>

                {/*    uchinchi qator */}
                <div className="bar">

                    <p className="main-text">
                        <SiHtml5 className="java-icon" style={{color: "#FF7300FF"}}/> <b
                        style={{fontSize: "35px", marginLeft: "20px"}}>HTML</b>
                    </p>

                    <p className="softskil">
                        HTML web markerlash tili bu web ilovalar va veb sahifalarni yaratish uchun foydalaniladi, bu til
                        bilan
                        web sahifalarni browser ko'rinishini yaratish, ularni sozlash ularga tuzilish qismini
                        shakllantirish
                        uchun foydalaniladi.
                    </p>

                </div>

                <div className="bar">

                    <p className="main-text">
                        <SiCss3 className="java-icon" style={{color: "#0095FFFF"}}/> <b
                        style={{fontSize: "35px", marginLeft: "20px"}}>CSS</b>
                    </p>

                    <p className="softskil">
                        CSS bu HTML filega dizayn ko'rinishini sozlash va ularni foydalanuvchiga qulay ko'rinishda
                        bo'lishini,
                        ta'minlaydi. Bu dizaynlash qismi hisoblanadi.
                    </p>

                </div>

                <div className="bar">

                    <p className="main-text">
                        <SiBootstrap className="java-icon" style={{color: "#C809F3FF"}}/> <b
                        style={{fontSize: "35px", marginLeft: "20px"}}>Bootstrap</b>
                    </p>

                    <p className="softskil">
                        Bu CSS ning frameworki bo'lib, css komponentlari bilan tayyor holda ishlash va ularni kodga
                        ishlatishda,
                        tayyor qismlarni chaqirib olinadi, bu bilan vaqtni tejaydi.
                    </p>

                </div>

                <div className="bar">

                    <p className="main-text">
                        <SiReact className="java-icon" style={{color: "#09DFF3FF"}}/> <b
                        style={{fontSize: "35px", marginLeft: "20px"}}>ReactJS</b>
                    </p>

                    <p className="softskil">
                        Bu dasturlash tili emas bu JavaScriptning framework darajasidagi kutubxonasi, bu asosan
                        JavaScript va
                        HTML ning birlashtirilishidan hosil bo'lgan framework, bu orqali tez yangilanuvchi web sahifalar
                        yaratish mumkin.
                    </p>

                </div>

                {/*  to'rtinchi qator  */}

                <div className="bar">

                    <p className="main-text">
                        <SiLinux className="java-icon" style={{color: "blue"}}/> <b
                        style={{fontSize: "35px", marginLeft: "20px"}}>Linux OS</b>
                    </p>

                    <p className="softskil">
                        Linux Operatsion Tizimin bu asosan erkin muhit bo'lib, Kuchli himoya va ochiq manbali sistema,
                        bugungi kunda bu Sistema bilan serverlar quriladi va boshqariladi.
                    </p>

                </div>

                <div className="bar">

                    <p className="main-text">
                        <SiWindows className="java-icon" style={{color: "blue"}}/> <b
                        style={{fontSize: "35px", marginLeft: "20px"}}>Windows
                        OS</b>
                    </p>

                    <p className="softskil">
                        Windows Operatsion sistemasi bugungi kunda deyarli ko'pchilik kompyuterlarning asosiy sistemasi
                        hisoblanadi va bu shaxsiy litsenziya asosida ishlash uchun moslashtirilgan sistema. Bu sistema
                        asosan ofis ishlariga mo'ljallangan.
                    </p>

                </div>

                <div className="bar">

                    <p className="main-text">
                        <SiPostgresql className="java-icon" style={{color: "#024B50FF"}}/> <b
                        style={{fontSize: "35px", marginLeft: "20px"}}>PostgreSQL</b>
                    </p>

                    <p className="softskil">
                        PostgreSQL bu ma'lumotlar bazasi bilan ishlash va ularning jamlash, ma'lumotlarni tahlil qilish,
                        ularni saralash uchun foydalaniladigan, sql tillar qismi hisoblanadi. Bu asosan so'rovlar tili
                        qilib
                        foydalanadi.
                    </p>

                </div>

                <div className="bar">

                    <p className="main-text">
                        <SiMysql className="java-icon" style={{color: "#0874C1FF"}}/> <b
                        style={{fontSize: "35px", marginLeft: "20px"}}>MySQL</b>
                    </p>

                    <p className="softskil">
                        MySQL so'rovlar tili ham ma'lumotlar bilan ishlashga asoslangan va bu ham so'rovlar tili. Bu
                        qism
                        bilan ishlash qulay va foydalanuvchiga yengil ishlash muhitini taqdim etadi.
                    </p>

                </div>

                {/*  Beshinchi qator  */}

                <div className="bar">

                    <p className="main-text">
                        <SiMariadb className="java-icon" style={{color: "#67230EFF"}}/> <b
                        style={{fontSize: "35px", marginLeft: "20px"}}>MariaDB</b>
                    </p>

                    <p className="softskil">
                        Maria BD ma'lumotlar bazasi MySQL ma'lumotlar bazasini yangilangan va qulaylashtirilgan qismi bu
                        so'rovlar tili deyarli MySQL bilan bir xilda ishlaydi va imkoniyatlarni yaxshilangan holatda
                        taqdim
                        etadi.
                    </p>

                </div>

                <div className="bar">

                    <p className="main-text">
                        <SiGit className="java-icon" style={{color: "#FF2600FF"}}/> <b
                        style={{fontSize: "35px", marginLeft: "20px"}}>Git</b>
                    </p>

                    <p className="softskil">
                        Git texnologiya bu sizning lokalniy dastur versiyalaringiz bilan ishlash uchun xizmat qiladi,
                        va sizga kod o'zgarishlari bilan ishlash imkoni beradi.
                    </p>

                </div>

                <div className="bar">

                    <p className="main-text">
                        <SiGithub className="java-icon"/> <b style={{fontSize: "35px", marginLeft: "20px"}}>GitHub</b>
                    </p>

                    <p className="softskil">
                        Bu muhit blan ishlashda siz o'zingizni ko'dingizni barcha imkoniyatlar bilan saqlashingiz va
                        zaruriy qismda,
                        undan foydalanishingiz mumkin. Bu foydalanish global miqyosa olib boriladi va bu bitta dastur
                        bilan bir nechta
                        odam bir vaqtda ishlash imkoni beradi.
                    </p>

                </div>

                <div className="bar">

                    <p className="main-text">
                        <SiGitlab className="java-icon" style={{color: "#FF7300FF"}}/> <b
                        style={{fontSize: "35px", marginLeft: "20px"}}>GitLab</b>
                    </p>

                    <p className="softskil">
                        GitHubning mukammal versiyasi bo'lib, bu katta tashkilotlar va yuqori havfsizlikka ega
                        korxonalarda,
                        mana shu jamoga tegishli odamlar o'rtasida berilgan koddan foydalanish va u bilan ishlash uchun
                        ishlatiladi.
                    </p>

                </div>

                {/*  oltinchi qator  */}

                <div className="bar">

                    <p className="main-text">
                        <SiNodeDotJs className="java-icon" style={{color: "green"}}/> <b
                        style={{fontSize: "35px", marginLeft: "20px"}}>Node
                        JS</b>
                    </p>

                    <p className="softskil">
                        Node JS bu JavaScript va TypeScriptning asosi qismi bo'lib u back-end dasturlarini ishga
                        tushirish uchun
                        foydalaniladi. Node JS dasturni console rejimida ishlashni taminlaydi.
                    </p>

                </div>

                <div className="bar">

                    <p className="main-text">
                        <SiWebpack className="java-icon" style={{color: "#04F8DBFF"}}/> <b
                        style={{fontSize: "35px", marginLeft: "20px"}}>WebPack</b>
                    </p>

                    <p className="softskil">
                        Reack JS ning frameworki bo'lib bu o'zidagi texnologiyalarni yagona qismga yo'naltirish uchun
                        ishlatiladi.
                        WebPack saralash qismi, HTML, CSS, JS fayllarni alohida guruhlarini moslashtiradi va ularni
                        yagona
                        qismga yo'naltiradi va shu asosda web sahifa ishga tushiriladi.
                    </p>

                </div>

                <div className="bar">

                    <p className="main-text">
                        <SiArduino className="java-icon" style={{color: "#00F6DAFF"}}/> <b
                        style={{fontSize: "35px", marginLeft: "20px"}}>Arduino</b>
                    </p>

                    <p className="softskil">
                        Bu texnologiya C++ ning frameworki bo'lib, uning vazifasi robototexnikalar bilan ishlash uchun
                        moslashtirilgan.
                        Arduino bu microsxemalar bilan ishlash uchun dastur ketma-ketligini shakllantiradi va uning
                        ishlashini
                        kontrol qiladi.
                    </p>

                </div>

                <div className="bar">

                    <p className="main-text">
                        <SiPostman className="java-icon" style={{color: "#F35B09FF"}}/> <b
                        style={{fontSize: "35px", marginLeft: "20px"}}>Postman</b>
                    </p>

                    <p className="softskil">
                        Bu ilova orqali siz dasturni bog'lanish IP va linklar bilan ishlash uchun foydalanasiz. Bu
                        asosan
                        back-end dasturlash tili bilan ishlash uchun foydalaniladi va uni front-end yozki boshqa qismlar
                        bilan
                        aloqa xolatini tekshirishda foydalaniladi.
                    </p>

                </div>

                {/*  yettinchi qator  */}

                <div className="bar">

                    <p className="main-text">
                        <SiDjango className="java-icon" style={{color: "green"}}/> <b
                        style={{fontSize: "35px", marginLeft: "20px"}}>DJango</b>
                    </p>

                    <p className="softskil">
                        DJango bu python dasturlash tilining frameworki va u asosan web ilovalarni ishlab
                        chiqish uchun ishlatiladi va bu pythonning asosiy frameworklaridan bittasi.
                    </p>

                </div>


            </div>

        </div>

    )

}

export default Texnology;