import Logo from '../../statics/LogoBlack.webp';

export const DescriptionRequeriments = () => {
    return (
        <div className="container-descriptionRequeriments">
            <div className="container-imageLogo">
                <img src={Logo} alt="Logo-Black" />
            </div>
    
            <div className="container-IntroductionRequeriments">
                <p>
                    Dar el primer paso hacia una carrera en Ingeniería Informática es emocionante y sencillo. 
                    Los requisitos de inscripción en ITESCO están diseñados para ser claros y directos. 
                    Necesitarás tus certificados académicos, identificación personal y completar nuestro formulario de inscripción en línea. Además, te guiaremos a través de cualquier prueba de admisión o entrevista necesaria. 
                    Revisa detenidamente la lista de requisitos, prepara tus documentos y ¡prepárate para transformar el futuro con ITESCO!
                </p>
            </div>
        </div>
    );
}