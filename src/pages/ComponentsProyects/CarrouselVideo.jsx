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
          <iframe className='container-video-thumbnail' src="https://drive.google.com/file/d/1Sznm42IGjghio3aeuYjoTZRbUPvp_JEK/preview" height="350" allow="autoplay" allowfullscreen="true"></iframe>
          {/*<video src={ CarrouselVideo1 } controls className='container-video-thumbnail'></video>*/}
          
          <div className="container-video-content">
            <h1>Diseñando el Futuro</h1>
            <p>¿Qué define exactamente a un ingeniero informático y cuál es el alcance de su contribución en el ámbito global?</p>
          </div>
        </div>

        <div className="container-carousel-item-video">
          {/*<video src={ CarrouselVideo2 } controls className='container-video-thumbnail'></video>*/}
          <iframe className='container-video-thumbnail' src="https://drive.google.com/file/d/15K7mtUiX56Y2wz02EwdcVu7VmJcy9s6V/preview?" height="350" allow="autoplay" allowfullscreen="true"></iframe>
          <div className="container-video-content">
            <h1>Solo necesitas 5 razones</h1>
            <p>Motivos clave para estudiar informática, destacando su papel esencial en la innovación y el progreso tecnológico.</p>
          </div>
        </div>

        <div className="container-carousel-item-video">
          {/*<video src={ CarrouselVideo3 } controls className='container-video-thumbnail'></video>*/}
          <iframe className='container-video-thumbnail' src="https://drive.google.com/file/d/1IB6aTK5nx9uHp9laeld17hDpOIj74Yag/preview" height="350" allow="autoplay" allowfullscreen="true"></iframe>
          <div className="container-video-content">
            <h1>Tecnologías para un Mundo Mejor</h1>
            <p>Ricardo Miss alumno destacado de la generación 2019-2023 habla sobre su contribución en la carrera.</p>
          </div>
        </div>

        <div className="container-carousel-item-video">
          {/*<video src={ CarrouselVideo4 } controls className='container-video-thumbnail'></video>*/}
          <iframe className='container-video-thumbnail' src="https://drive.google.com/file/d/15Co8jvUp6CChtN6chBcPTXzF89EKmkgZ/preview" height="350" allow="autoplay" allowfullscreen="true"></iframe>
          <div className="container-video-content">
            <h1>¿Y después?</h1>
            <p>Los pasos siguientes para convertirse en un futuro Ingeniero Informático exitoso.</p>
          </div>
        </div>

      </div>
    </div>
  );
}