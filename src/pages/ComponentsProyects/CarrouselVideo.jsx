import CarrouselVideo1 from '../../statics/CarrouselVideo1.webp';
import CarrouselVideo2 from '../../statics/CarrouselVideo2.webp';
import CarrouselVideo3 from '../../statics/CarrouselVideo3.webp';
import CarrouselVideo4 from '../../statics/CarrouselVideo4.webp';

export const CarrouselVideo = () => {
  return (
    <div className="container-carousel">
      <div className="container-carousel-item-video">
        <img src={ CarrouselVideo1 } alt="Estudiante 1" className='container-video-thumbnail'/>
        <div className="container-video-content">
          <h1>Diseñando el Futuro</h1>
          <p>Juan Pérez nos cuenta sobre su experiencia liderando el proyecto de realidad aumentada que ganó el primer lugar en la feria tecnológica anual.</p>
        </div>
      </div>

      <div className="container-carousel-item-video">
        <img src={ CarrouselVideo2 } alt="Estudiante 2" className='container-video-thumbnail'/>
        <div className="container-video-content">
          <h1>Código que Cuenta Historias</h1>
          <p>Ana Gómez explica cómo su pasión por narrativas interactivas se traduce en innovadoras aplicaciones de storytelling.</p>
        </div>
      </div>

      <div className="container-carousel-item-video">
        <img src={ CarrouselVideo3 } alt="Estudiante 3" className='container-video-thumbnail'/>
        <div className="container-video-content">
          <h1>Ingeniería con Impacto Social</h1>
          <p>Carlos Sánchez habla sobre cómo su software de aprendizaje de idiomas está ayudando a comunidades marginadas.</p>
        </div>
      </div>

      <div className="container-carousel-item-video">
        <img src={ CarrouselVideo4} alt="Estudiante 4" className='container-video-thumbnail'/>
        <div className="container-video-content">
          <h1>Tecnología para un Mundo Mejor</h1>
          <p>Luisa Fernanda comparte su viaje en el desarrollo de una app ecológica que promueve el reciclaje en el campus.</p>
        </div>
      </div>
    </div>
  );
}