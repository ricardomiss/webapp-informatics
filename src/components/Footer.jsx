import { FaGithub, FaFacebook, FaInstagram, FaTwitter, FaTiktok, FaEnvelope } from 'react-icons/fa';
import '../style/Footer.css';

const Footer = () => {
    return (
        <div className="container-footer">
            <footer>
                <div className="container-footer_redes">
                    <h3>Redes Sociales</h3>

                    <ul>
                        <li><a href="https://github.com/proinformaticos" target="_blank" rel="noopener noreferrer"><FaGithub className='icon-git' /><span>GitHub</span></a> </li>
                        <li><a href="https://www.tiktok.com/@informatica_itesco?_t=8i4zM4c57DB&_r=1" target="_blank" rel="noopener noreferrer"><FaTiktok className='icon-fb' /><span>TikTok</span></a> </li>
                        <li><a href="https://www.instagram.com/informatica_p_novatos/?utm_source=qr&igshid=MzNlNGNkZWQ4Mg%3D%3D" target="_blank" rel="noopener noreferrer"><FaInstagram className='icon-ig' /><span>Instagram</span></a> </li>
                    </ul>
                </div>

                <div className="container-footer_redes">
                    <h3>Redes oficiales del ITESCO</h3>

                    <ul>
                        <li><a href="https://www.facebook.com/ITESCOOFICIAL" target="_blank" rel="noopener noreferrer"><FaFacebook className='icon-git' /><span>Cuenta oficial de ITESCO</span></a> </li>
                        <li><a href="https://www.facebook.com/ITESCOOFICIAL" target="_blank" rel="noopener noreferrer"><FaFacebook className='icon-git' /><span>Cuenta oficial de Informática</span></a> </li>
                    </ul>
                </div>

                <div className="container-footer_redes">
                    <h3>Correos de contacto</h3>
                    <ul>
                        <li><a href="mailto:div_informatica@itesco.edu.mx"><FaEnvelope className='icon-git' />div_informatica@itesco.edu.mx</a></li>
                        <li><a href="mailto:proinformaticos14@gmail.com"><FaEnvelope className='icon-git' />proinformaticos14@gmail.com</a></li>
                    </ul>
                </div>
                
                <div className="container-footerSecond">
                    <h3>Dirección</h3>

                    <p>Carretera Antigua Minatitlán-Coatzacoalcos Km. 16.5 Col. Reserva Territorial, C.P.96536</p>
                </div>

            </footer>
        </div>
    )
}

export default Footer;