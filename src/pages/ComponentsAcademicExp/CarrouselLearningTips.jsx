import conceptKeyImage from '../../statics/CarrouselVideo2.webp';
import practiceConsistentImage from '../../statics/CarrouselHighlights3.webp';
import realProjectsImage from '../../statics/realProjectsImage.webp';
import learnFromMistakesImage from '../../statics/DescriptionExpAcademic.webp';
import collaborateShareImage from '../../statics/CarrouselHighlights1.webp';
import maintainBalanceImage from '../../statics/CarrouselHighlights1.webp';

export const CarrouselLearningTips = () => {
  return (
    <div className="container-carousel-tips">
      <div className="container-tip-item">
        <img src={ conceptKeyImage } alt="Domina los Conceptos Clave" className="container-tip-image" />
        <h1>Domina los Conceptos Clave</h1>
        <p>Enfócate en entender profundamente los conceptos básicos, ya que son la base sobre la que se construyen conocimientos más avanzados.</p>
      </div>

      <div className="container-tip-item">
        <img src={ practiceConsistentImage } alt="Práctica Consistente" className="container-tip-image" />
        <h1>Práctica Consistente</h1>
        <p>La programación y otras habilidades informáticas se benefician enormemente de la práctica regular. Dedica tiempo cada día para codificar y resolver problemas.</p>
      </div>

      <div className="container-tip-item">
        <img src={ realProjectsImage } alt="Trabaja en Proyectos Reales" className="container-tip-image" />
        <h1>Trabaja en Proyectos Reales</h1>
        <p>Aplica lo que aprendes en proyectos personales o grupales. Esto no solo fortalece tu comprensión, sino que también enriquece tu portafolio.</p>
      </div>

      <div className="container-tip-item">
        <img src={ learnFromMistakesImage } alt="Aprende de los Errores" className="container-tip-image" />
        <h1>Aprende de los Errores</h1>
        <p>No temas cometer errores; son tus mejores maestros. Analiza y aprende de cada error para mejorar tu habilidad.</p>
      </div>

      <div className="container-tip-item">
        <img src={ collaborateShareImage } alt="Colabora y Comparte" className="container-tip-image" />
        <h1>Colabora y Comparte</h1>
        <p>La ingeniería informática es a menudo un esfuerzo de equipo. Participa en grupos de estudio y proyectos colaborativos para aprender de tus compañeros.</p>
      </div>

      <div className="container-tip-item">
        <img src={ maintainBalanceImage } alt="Mantén el Equilibrio" className="container-tip-image" />
        <h1>Mantén el Equilibrio</h1>
        <p>Balancea tu vida académica con actividades recreativas y descanso adecuado para mantener un rendimiento óptimo.</p>
      </div>
    </div>
  );
}