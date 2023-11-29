import PersonIntroduction from '../../statics/PersonIntroduction.webp';

export const IntroductionInstructions = () => {
    return (
        <div className="container-Introduction">
            <div className="container-personIntroduction">
                <img src={ PersonIntroduction} alt="person" />
            </div>
    
            <div className="container-IntroductionInstructions">
                <p>
                 Unirte a la comunidad de ITESCO es tu primer paso hacia una carrera llena de oportunidades. 
                 Sigue esta guía simplificada para completar tu inscripción:
                </p>
            </div>
        </div>
    );
}