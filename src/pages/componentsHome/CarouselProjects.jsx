import CarouselImage1 from '../../statics/CarouselProjects1.png';
import CarouselImage2 from '../../statics/CarouselProjects2.png';
import CarouselImage3 from '../../statics/CarouselProjects3.png';
import CarouselImage4 from '../../statics/CarouselProjects4.png';

//Estilos css
import '../../style/Home/CarouselProjects.css';

export const CarouselProjects = () => {
  return (
    <div className='container-carouselProjects'>

        <div className="container-carouselProjects_card">
            <div className="container-carouselProjects_img">
                <img src={ CarouselImage1 } alt="" />
            </div>

            <div className="container-carouselProyects_description">
                <p>
                    Integra la nueva generación de líderes en software, capacitados para dirigir proyectos
                    integrales que mejoran la competitividad organizacional mediante soluciones innovadoras 
                    y de alta calidad. 
                </p>

                <button>Más Sobre Software</button>
            </div>
        </div>

        <div className="container-carouselProjects_card">
            <div className="container-carouselProjects_img">
                <img src={ CarouselImage2 } alt="" />
            </div>

            <div className="container-carouselProyects_description">
                <p>
                    Usa tecnología avanzada para mejorar procesos empresariales con software actual y 
                    emergente, maximizando la eficiencia.
                </p>

                <button>Más Sobre TI</button>
            </div>
        </div>

        <div className="container-carouselProjects_card">
            <div className="container-carouselProjects_img">
                <img src={ CarouselImage3 } alt="" />
            </div>

            <div className="container-carouselProyects_description">
                <p>
                    Especialízate en diseñar, implementar y administrar bases de datos sólidas, seguras y 
                    eficientes, fundamentales para la infraestructura de información de organizaciones 
                    modernas.  
                </p>

                <button>Más Sobre Bases de Datos</button>
            </div>
        </div>

        <div className="container-carouselProjects_card">
            <div className="container-carouselProjects_img">
                <img src={ CarouselImage4 } alt="" />
            </div>

            <div className="container-carouselProyects_description">
                <p>
                    Especialízate en diseñar, implementar y administrar bases de datos sólidas, seguras y 
                    eficientes, fundamentales para la infraestructura de información de organizaciones 
                    modernas.  
                </p>

                <button>Más Sobre Redes</button>
            </div>
        </div>
    </div>
  )
}
