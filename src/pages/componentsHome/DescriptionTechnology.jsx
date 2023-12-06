import computer from '../../statics/computer.webp';

export const DescriptionTechnology = () => {
    return (
        <div className="container-descriptionTechnology">
            <div className="container-imageComputer">
                <img src={computer} alt="Computer" />
            </div>
    
            <div className="container-immerse">
                <h3>SUMÉRGETE EN EL MUNDO DE LA TECNOLOGÍA</h3>
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