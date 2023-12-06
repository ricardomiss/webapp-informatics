import eliamImage from '../../statics/eliam-image.webp';

export const StudentImage = () => {
  return (
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
  )
}