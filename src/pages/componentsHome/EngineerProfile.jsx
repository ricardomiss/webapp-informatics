import EngineerImage from '../../statics/EngineerProfile.webp';
import '../../style/Home/EngineerProfile.css';

const EngineerProfile = () => {
  return (
    <div className="container-engineerProfile">
        <div className="container-engineerProfile_flexElement">
            <div className="container-engineerProfile_image">
                <img src={ EngineerImage } alt="" />
            </div>

            <div className="container-engineerProfile_description">
                <h3>PERFIL DEL INGENIERO INFORMÁTICO EGRESADO</h3>

                <p>
                    Los egresados de ITESCO son expertos en tecnología y gestión de proyectos de sofware, 
                    especializados en optimización de procesos, bases de datos y redes de computadoras. 
                    Destacan como consultores estratégicos y líderes comprometidos con la ética y la 
                    sostenibilidad.
                </p>
            </div>
        </div>
        <div className="container-engineerProfile_circle"></div>
    </div>
  )
}

export default EngineerProfile;