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
            <p>Alejandro, egresado de ingeniería informática, se sumerge en el mundo tecnológico desde
            joven. Tras graduarse, descubre su pasión por el desarrollo web y con esfuerzo, se convierte
            en administrador de sitios web. Siendo hoy en día emprendedor, demuestra que sus
            conocimientos son clave para alcanzar el éxito.</p>
          </div>
        </div>

        <div className="container-carousel-item-video">
          <video src={ CarrouselVideo4 } controls className='container-video-thumbnail'></video>
          <div className="container-video-content">
            <p>Alejandro, egresado de ingeniería informática, se sumerge en el mundo tecnológico desde
            joven. Tras graduarse, descubre su pasión por el desarrollo web y con esfuerzo, se convierte
            en administrador de sitios web. Siendo hoy en día emprendedor, demuestra que sus
            conocimientos son clave para alcanzar el éxito.</p>
          </div>
        </div>

      </div>
    </div>
  );
}