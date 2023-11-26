import carrouselevent1 from '../../statics/CarouselEvent1.webp';
import carrouselevent2 from '../../statics/CarouselEvent2.webp';
import carrouselevent3 from '../../statics/CarouselEvent3.webp';
import carrouselevent4 from '../../statics/CarouselEvent4.webp';

export const CarrouselEvents = () => {
  return (
    <div className="container-carousel-events">
      <div className="container-event-item">
        <img src={ carrouselevent1 } alt="Hackathon Anual ITESCO 2023" className="container-event-image" />
        <h1>HACKATHON ANUAL ITESCO 2023</h1>
        <p>Sé parte del maratón de programación más emocionante del año. Colabora, compite y crea en 48 horas de innovación continua. ¡Prepárate para el desafío!</p>
      </div>

      <div className="container-event-item">
        <img src={ carrouselevent2 } alt="Feria de Proyectos de Software ITESCO" className="container-event-image" />
        <h1>FERIA DE PROYECTOS DE SOFTWARE ITESCO</h1>
        <p>Descubre las creaciones más innovadoras de nuestros estudiantes. Este evento exhibe proyectos que definen la próxima generación de la tecnología.</p>
      </div>

      <div className="container-event-item">
        <img src={ carrouselevent3 } alt="Conferencia de Seguridad Informática" className="container-event-image" />
        <h1>CONFERENCIA DE SEGURIDAD INFORMÁTICA</h1>
        <p>Conoce a expertos en ciberseguridad y aprende sobre las últimas tendencias y técnicas para proteger el mundo digital en nuestra conferencia anual.</p>
      </div>

      <div className="container-event-item">
        <img src={ carrouselevent4 } alt="Seminario de Innovación Tecnológica" className="container-event-image" />
        <h1>SEMINARIO DE INNOVACIÓN TECNOLÓGICA</h1>
        <p>Participa en nuestro seminario y sumérgete en las últimas innovaciones en tecnología. Conecta con líderes de la industria y pioneros en investigación.</p>
      </div>
    </div>
  );
}
