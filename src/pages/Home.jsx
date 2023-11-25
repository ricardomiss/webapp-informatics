import { BannerImage } from "./componentsHome/BannerImage";
import computer from '../statics/computer.png';
import firstBridge from '../statics/first-bridge.png';
import secondBridge from '../statics/second-bridge.png';
import eliamImage from '../statics/eliam-image.png'
import '../style/main.css';
import '../style/Home/container-tecworld.css';

const DescriptionTechnology = () => (
    <div className="container-descriptionTechnology">
        <div className="container-imageComputer">
            <img src={computer} alt="Computer" />
        </div>

        <div className="container-immerse">
            <h2>SUMÉRGETE EN EL MUNDO DE LA TECNOLOGÍA</h2>
            <p>
                Explora la innovación en ITESCO: laboratorios de informática y áreas colaborativas 
                diseñadas para inspirar creatividad y unir teoría con práctica, preparándote para 
                impactar en tecnología.
            </p>

            <button>Conoce Nuestra Tecnología</button>
        </div>
    </div>
);

const Bridge = () => (
    <div className="container-bridge">
        <div className="container-bridge_description">
            <h3>TU PUENTE HACIA UNA CARRERA DINÁMICA</h3>

            <p>
                ITESCO combina educación académica y conexiones profesionales, brindando acceso
                a pasantías y empleo a través de su red de exalumnos y socios. Inicia tu carrera 
                con nuestro apoyo y orientación.
            </p>

            <button>Oportunidades Profesionales</button>
        </div>

        <div className="container-bridge_images">
            <div className="container-bridge_images-first">
                <img src={firstBridge} alt="First Bridge" />
            </div>

            <div className="container-bridge_images-second">
                <img src={secondBridge} alt="Second Bridge" />
            </div>
        </div>
    </div>
);

export const Home = () => (
    <main>
        <BannerImage />
        <div className="container-TecWorld">
            <DescriptionTechnology />
            <div className="container-circleBlue"></div>
        </div>
        <Bridge />

        <div className="container-eliam">
            <div className="container-eliamImage">
                <img src={ eliamImage } alt="" />
            </div>

            <div className="container-eliam_description">
                <h3>
                  DISEÑA EL FUTURO CON TECNOLOGÍA DE VANGUARDIA 
                </h3>

                <p>
                    Los estudiantes de Ingeniería Informática de ITESCO se sumergen en innovación
                    y tecnología avanzada, preparándose para futuros desafíos mediante práticas con 
                    herramientas y proyectos pioneros en el sector tecnológico.
                </p>

                <button>Botón</button>
            </div>
        </div>
    </main>
);