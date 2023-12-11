import carrouselhighlights1 from '../../statics/CarrouselHighlights1.webp';
import carrouselhighlights2 from '../../statics/CarrouselHighlights4.webp';
import carrouselhighlights3 from '../../statics/CarrouselHighlights2.webp';
import carrouselhighlights4 from '../../statics/CarrouselHighlights3.webp';

import '../../style/StudentLife/CarrouselEventHighlights.css'

export const CarrouselEventHighlights = () => {
  return (
    <div className="container-carousel-highlights">
      <div className="container-highlight-item">
        <div className="container-highlight-image">
          <img src={carrouselhighlights1} alt="Competencias de Programación" />
        </div>

        <h1>COMPETENCIAS DE PROGRAMACIÓN: <span>DONDE SE PONE A PRUEBA LA HABILIDAD Y LA CREATIVIDAD DE NUESTROS ESTUDIANTES</span></h1>
      </div>

      <div className="container-highlight-item">
        <div className="container-highlight-image">
          <img src={carrouselhighlights2} alt="Competencias de Programación" />
        </div>
        <h1>APRENDIZAJE EN SEMINARIOS DE TECNOLOGÍA: <span>ESTUDIANTES Y PROFESIONALES COMPARTIENDO CONOCIMIENTO</span></h1>
      </div>

      <div className="container-highlight-item">
        <div className="container-highlight-image">
          <img src={carrouselhighlights3} alt="Competencias de Programación" />
        </div>
        <h1>COLABORACIÓN EN LA FERIA DE PROYECTOS: <span>ESTUDIANTES EXHIBIENDO SUS SOLUCIONES TECNOLÓGICAS</span></h1>
      </div>

      <div className="container-highlight-item">
        <div className="container-highlight-image">
          <img src={carrouselhighlights4} alt="Competencias de Programación" />
        </div>
        <h1>INNOVACIÓN EN EL HACKATHON ANUAL: <span>DONDE LAS IDEAS COBRAN VIDA</span></h1>
      </div>
    </div>
  );
}