import '../css/Footer.css';
import { useContext } from 'react';
import { SiteContext } from './context/SiteContext.js';

// Icons
import { BsFacebook } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { BsFillTelephoneFill } from "react-icons/bs";
import { IoIosPin } from "react-icons/io";
import { MdEmail } from "react-icons/md";

import Button from './Button.js';

const Header = props => {

    const site = useContext(SiteContext);

    return (
        <footer className='Footer'>
            <div className='secFooter'>
                <Image className='FooterTitle' src={`../${site}`} alt='Imagen' />
            </div>
            <div className='secFooter'>
                <h3>Nuestros cursos</h3>
                <ul className='ListFooter'>
                    <li><a href='#'>Curso de guitarra</a></li>
                    <li><a href='#'>Curso de Piano</a></li>
                    <li><a href='#'>Curso de Percución</a></li>
                    <li><a href='#'>Curso de Canto</a></li>
                </ul>
            </div>
            <div className='secFooter'>
                <h3>Nuestras redes</h3>
                <ul className='ListFooter'>
                    <li><a href='#'><BsFacebook /> Facebook</a></li>
                    <li><a href='#'><BsInstagram /> Instagram</a></li>
                    <li><a href='#'><BsTwitter /> Twitter</a></li>
                </ul>
            </div>
            <div className='secFooter'>
                <h3>Contacto</h3>
                <ul className='ListFooter'>
                    <li><IoIosPin /> Calle 15 #8-20</li>
                    <li><BsFillTelephoneFill /> 3012345678</li>
                    <li><MdEmail /> administracion@fundacionremifa.org</li>
                </ul>
            </div>
        </footer>
    );
}

export default Header;