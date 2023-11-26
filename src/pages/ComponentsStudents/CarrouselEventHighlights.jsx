import carrouselhighlights1 from '../../statics/CarrouselHighlights1.webp';
import carrouselhighlights2 from '../../statics/CarrouselHighlights2.webp';
import carrouselhighlights3 from '../../statics/CarrouselHighlights3.webp';
import carrouselhighlights4  from '../../statics/CarrouselHighlights4.webp';

export const CarrouselEventHighlights = () => {
  return (
    <div className="container-carousel-highlights">
      <div className="container-highlight-item">
        <img  src={ carrouselhighlights1 } alt="Competencias de Programación" className="container-highlight-image" />
        <h1>COMPETENCIAS DE PROGRAMACIÓN: DONDE SE PONE A PRUEBA LA HABILIDAD Y LA CREATIVIDAD DE NUESTROS ESTUDIANTES</h1>
      </div>

      <div className="container-highlight-item">
        <img  src={ carrouselhighlights2 } alt="Aprendizaje en Seminarios de Tecnología" className="container-highlight-image" />
        <h1>APRENDIZAJE EN SEMINARIOS DE TECNOLOGÍA: ESTUDIANTES Y PROFESIONALES COMPARTIENDO CONOCIMIENTO</h1>
      </div>

      <div className="container-highlight-item">
        <img  src={ carrouselhighlights3 } alt="Colaboración en la Feria de Proyectos" className="container-highlight-image" />
        <h1>COLABORACIÓN EN LA FERIA DE PROYECTOS: ESTUDIANTES EXHIBIENDO SUS SOLUCIONES TECNOLÓGICAS</h1>
      </div>

      <div className="container-highlight-item">
        <img  src={ carrouselhighlights4 } alt="Innovación en el Hackathon Anual" className="container-highlight-image" />
        <h1>INNOVACIÓN EN EL HACKATHON ANUAL: DONDE LAS IDEAS COBRAN VIDA</h1>
      </div>
    </div>
  );
}