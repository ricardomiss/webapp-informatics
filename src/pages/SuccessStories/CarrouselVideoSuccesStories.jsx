import CarrouselVideo1 from '../../statics/casoexito1.mp4';
import CarrouselVideo2 from '../../statics/casoexito2.mp4';
import CarrouselVideo3 from '../../statics/casoexito3.mp4';
import CarrouselVideo4 from '../../statics/casoexito4.mp4';

import '../../style/SuccessStories/CarrouselVideo.css';

export const CarrouselVideoSuccesStories = () => {
  return (
    <div className="container-carousel_unique">
      <div className="container-caoursel_circleVideo"></div>

      <div className="container-carousel_flexbox">

        <div className="container-carousel-item-video">
          <video src={ CarrouselVideo1 } controls className='container-video-thumbnail'></video>
          
          <div className="container-video-content">
            <p>Gabriela, especialista en marketing de contenidos, se formó en ingeniería informática con
            enfoque en inteligencia de negocios. Desde sus inicios aplicó eficazmente sus conocimientos
            en publicidad. Graduada, ha destacado en diversas empresas impulsando marcas y
            contribuyendo al crecimiento empresarial.</p>
          </div>
        </div>

        <div className="container-carousel-item-video">
          <video src={ CarrouselVideo2 } controls className='container-video-thumbnail'></video>
          <div className="container-video-content">
            <p>Alejandro, egresado de ingeniería informática, se sumerge en el mundo tecnológico desde
            joven. Tras graduarse, descubre su pasión por el desarrollo web y con esfuerzo, se convierte
            en administrador de sitios web. Siendo hoy en día emprendedor, demuestra que sus
            conocimientos son clave para alcanzar el éxito.</p>
          </div>
        </div>

        <div className="container-carousel-item-video">
          <video src={ CarrouselVideo3 } controls className='container-video-thumbnail'></video>
          <div className="container-video-content">
            <p>Emmanuel, Tech Lead, egresado de Ingeniería Informática, comenzó en su carrera profesional como desarrollador Frontend en un startup de desarrollo de software, ha trabajado para diferentes empresas de diferentes ámbitos como Fintech y Health Tech.
            Actualmente se desempeña como Tech Lead en Mediclar, un startup de Health Tech enfocada en la prevención y cuidado de la salud a través de análisis clínicos.
            </p>
          </div>
        </div>

        <div className="container-carousel-item-video">
          <video src={ CarrouselVideo4 } controls className='container-video-thumbnail'></video>
          <div className="container-video-content">
            <p>Alexis, Desarrollador web front end, graduado de la ingeniería en informática, aplico los conocimientos en desarrollo de aplicaciones móviles y web para llevar a la sociedad herramientas útiles que ayuden a su desarrollo y conocimiento. He trabajado para la universidad de oriente como lead front end developer, y desarrollador móvil, actualmente trabajo en “Daisies health”.</p>
          </div>
        </div>

      </div>
    </div>
  );
}