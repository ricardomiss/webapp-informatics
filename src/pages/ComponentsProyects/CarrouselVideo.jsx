import CarrouselVideo1 from '../../statics/casoexito1.mp4';
import CarrouselVideo2 from '../../statics/casoexito2.mp4';
import CarrouselVideo3 from '../../statics/casoexito3.mp4';
import CarrouselVideo4 from '../../statics/casoexito4.mp4';

import '../../style/FeaturedProyects/CarrouselVideo.css';

export const CarrouselVideo = () => {
  return (
    <div className="container-carousel_unique">
      <div className="container-caoursel_circleVideo"></div>

      <div className="container-carousel_unique-p">
        <p>ESTUDIANTES EN ACCIÓN</p>
      </div>

      <div className="container-carousel_flexbox">

        <div className="container-carousel-item-video">
          <video src={ CarrouselVideo1 } controls className='container-video-thumbnail'></video>
          
          <div className="container-video-content">
            <h1>Diseñando el Futuro</h1>
            <p>Juan Pérez nos cuenta sobre su experiencia liderando el proyecto de realidad aumentada que ganó el primer lugar en la feria tecnológica anual.</p>
          </div>
        </div>

        <div className="container-carousel-item-video">
          <video src={ CarrouselVideo2 } controls className='container-video-thumbnail'></video>
          <div className="container-video-content">
            <h1>Código que Cuenta Historias</h1>
            <p>Ana Gómez explica cómo su pasión por narrativas interactivas se traduce en innovadoras aplicaciones de storytelling.</p>
          </div>
        </div>

        <div className="container-carousel-item-video">
          <video src={ CarrouselVideo3 } controls className='container-video-thumbnail'></video>
          <div className="container-video-content">
            <h1>Ingeniería con Impacto Social</h1>
            <p>Carlos Sánchez habla sobre cómo su software de aprendizaje de idiomas está ayudando a comunidades marginadas.</p>
          </div>
        </div>

        <div className="container-carousel-item-video">
          <video src={ CarrouselVideo4 } controls className='container-video-thumbnail'></video>
          <div className="container-video-content">
            <h1>Tecnología para un Mundo Mejor</h1>
            <p>Luisa Fernanda comparte su viaje en el desarrollo de una app ecológica que promueve el reciclaje en el campus.</p>
          </div>
        </div>

      </div>
    </div>
  );
}