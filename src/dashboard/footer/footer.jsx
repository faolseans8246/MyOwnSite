import React from "react";
import './footer.css';

// icons
import TelegramIcon from '@mui/icons-material/Telegram';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import XIcon from '@mui/icons-material/X';
import {SiTiktok}                                                             from "@react-icons/all-files/si/SiTiktok";
import {AddLocation, Email, LocationOn, Phone, PhoneAndroid, PostAddOutlined} from "@mui/icons-material";

function Footer() {

    return (

        <div className="footer-container">

            <div className="in-footer">
                <div className="social-media">

                    <p className="telegram-mess">
                        <TelegramIcon style={{color: '#00FFE1FF'}}/>
                        <a href="https://t.me/feruzbek_khamroev" className="tme-link">Telegram</a>
                    </p>

                    <p className="instagram-mess">
                        <InstagramIcon style={{color: '#F309C4FF'}}/>
                        <a href="#" className="ins-link">Instagram</a>
                    </p>

                    <p className="LinkedIn-mess">
                        <LinkedInIcon style={{color: '#3E68EAFF'}}/>
                        <a href="https://www.linkedin.com/in/feruzbek-khamroev-b411a5297"
                           className="ln-link">LinkedIn</a>
                    </p>

                    <p className="meta-mess">
                        <FacebookIcon style={{color: '#4357AAFF'}}/>
                        <a href="https://www.facebook.com/feruzbek_khamroev.3" className="meta-link">Facebook</a>
                    </p>

                    <p className="youtube-mess">
                        <YouTubeIcon style={{color: '#FF002FFF'}}/>
                        <a href="#" className="you-link">YouTube</a>
                    </p>

                    <p className="tiktok-mess">
                        <SiTiktok style={{color: '#842DEDFF'}}/>
                        <a href="#" className="tt-link">Tik Tok</a>
                    </p>

                    <p className="x-mess">
                        <XIcon style={{color: '#000000FF'}}/>
                        <a href="http://www.twitter.com/f_khamroev" className="x-link">Twitter</a>
                    </p>

                </div>

                <div className="calls">

                    <p className="phone">
                        <PhoneAndroid style={{color: 'green'}}/> <b className="footer-phone">Phone:</b> +(998 94) 281-82-46
                    </p>

                    <p className="phone">
                        <Email style={{color: 'yellow'}}/> <b className="footer-mail">E-mail:</b> feruzbekkhamroev2002@gmail.com
                    </p>

                    <p className="phone">
                        <PostAddOutlined style={{color: 'red'}}/> <b className="footer-post">Post-code:</b> xxxxxx
                    </p>

                </div>


                <div className="address">

                    <div className="my-address">
                        <h3 className="main-title"><LocationOn style={{color: 'green'}}/> Mening manzili:</h3>
                        <p className="my-address">
                            O'zbekiston Respublikasi, Samarqand viloyati,
                            Qo'shrabot tumani, Oqchopsoy MFY, Bozorjoy qishlog'i,
                            10-uy
                        </p>
                    </div>

                    <div className="now-address">
                        <h3 className="now-title"><AddLocation style={{color: '#D2691EFF'}}/> O'qish manzilim:</h3>
                        <p className="my-address">
                            O'zbekiston Respublikasi, Toshkent shahar,
                            Yunusobod tumani, Amirtemur-108
                        </p>
                    </div>

                </div>

            </div>

        </div>

    )

}

export default Footer;