import carrouselhighlights1 from '../../statics/CarrouselHighlights1.webp';
import carrouselhighlights2 from '../../statics/CarrouselHighlights2.webp';
import carrouselhighlights3 from '../../statics/CarrouselHighlights3.webp';
import carrouselhighlights4  from '../../statics/CarrouselHighlights4.webp';

export const CarrouselEventHighlights = () => {
  return (
    <div className="container-carousel-highlights">
      <div className="container-highlight-item">
        <img  src={ carrouselhighlights1 } alt="Competencias de Programación" className="container-highlight-image" />
        <h1>Competencias de Programación: Donde se pone a prueba la habilidad y la creatividad de nuestros estudiantes</h1>
      </div>

      <div className="container-highlight-item">
        <img  src={ carrouselhighlights2 } alt="Aprendizaje en Seminarios de Tecnología" className="container-highlight-image" />
        <h1>Aprendizaje en Seminarios de Tecnología: Estudiantes y profesionales compartiendo conocimiento</h1>
      </div>

      <div className="container-highlight-item">
        <img  src={ carrouselhighlights3 } alt="Colaboración en la Feria de Proyectos" className="container-highlight-image" />
        <h1>Colaboración en la Feria de Proyectos: Estudiantes exhibiendo sus soluciones tecnológicas</h1>
      </div>

      <div className="container-highlight-item">
        <img  src={ carrouselhighlights4 } alt="Innovación en el Hackathon Anual" className="container-highlight-image" />
        <h1>Innovación en el Hackathon Anual: Donde las ideas cobran vida</h1>
      </div>
    </div>
  );
}