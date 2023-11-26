import { FaGithub, FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import '../style/Footer.css';

const Footer = () => {
    return (
        <div className="container-footer">
            <footer>
                <div className="container-footer_redes">
                    <h3>LOREM IPSUM DOLOR</h3>

                    <ul>
                        <li><FaGithub className='icon-git' /> <span>LOREM IPSUM DOLOR</span></li>
                        <li><FaFacebook className='icon-fb' /> <span>LOREM IPSUM DOLOR</span></li>
                        <li><FaInstagram className='icon-ig' /> <span>LOREM IPSUM DOLOR</span></li>
                        <li><FaTwitter className='icon-tw' /> <span>LOREM IPSUM DOLOR</span></li>
                    </ul>
                </div>

                <div className="container-footerFirst">
                    <h3>LOREM IPSUM DOLOR</h3>

                    <ul>
                        <li>LOREM IPSUM SOLOR</li>
                        <li>LOREM IPSUM SOLOR</li>
                        <li>LOREM IPSUM SOLOR</li>
                        <li>LOREM IPSUM SOLOR</li>
                        <li>LOREM IPSUM SOLOR</li>
                        <li>LOREM IPSUM SOLOR</li>
                    </ul>
                </div>

                <div className="container-footerSecond">
                    <h3>LOREM IPSUM DOLOR</h3>

                    <ul>
                        <li>LOREM IPSUM SOLOR</li>
                        <li>LOREM IPSUM SOLOR</li>
                        <li>LOREM IPSUM SOLOR</li>
                    </ul>
                </div>

                <div className="container-footerThird">
                    <h3>LOREM IPSUM DOLOR</h3>

                    <ul>
                        <li>LOREM IPSUM SOLOR</li>
                        <li>LOREM IPSUM SOLOR</li>
                        <li>LOREM IPSUM SOLOR</li>
                        <li>LOREM IPSUM SOLOR</li>
                        <li>LOREM IPSUM SOLOR</li>
                    </ul>
                </div>
            </footer>
        </div>
    )
}

export default Footer;