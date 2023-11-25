import computer from '../../statics/computer.png';

export const DescriptionTechnology = () => {
    return (
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
}