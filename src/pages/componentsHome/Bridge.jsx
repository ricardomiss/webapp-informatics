import firstBridge from '../../statics/first-bridge.webp';
import secondBridge from '../../statics/second-bridge.webp';

const Bridge = () => {
    return (
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
}

export default Bridge;