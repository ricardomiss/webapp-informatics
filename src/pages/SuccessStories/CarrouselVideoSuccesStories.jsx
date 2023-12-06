import CarrouselVideo1 from '../../statics/CarrouselVideo1.webp';
import CarrouselVideo2 from '../../statics/EngineerProfile.webp';
import CarrouselVideo3 from '../../statics/CarrouselVideo2.webp';
import CarrouselVideo4 from '../../statics/CarrouselVideo3.webp';

import '../../style/SuccessStories/CarrouselVideo.css';

export const CarrouselVideoSuccesStories = () => {
  return (
    <div className="container-carousel_unique">
      <div className="container-caoursel_circleVideo"></div>

      <div className="container-carousel_flexbox">

        <div className="container-carousel-item-video">
          <img src={CarrouselVideo1} alt="Egresado 1" className='container-video-thumbnail' />
          
          <div className="container-video-content">
            <p>Gabriela, especialista en marketing de contenidos, se formó en ingeniería informática con
            enfoque en inteligencia de negocios. Desde sus inicios aplicó eficazmente sus conocimientos
            en publicidad. Graduada, ha destacado en diversas empresas impulsando marcas y
            contribuyendo al crecimiento empresarial.</p>
          </div>
        </div>

        <div className="container-carousel-item-video">
          <img src={CarrouselVideo2} alt="Egresado 2" className='container-video-thumbnail' />
          <div className="container-video-content">
            <p>Alejandro, egresado de ingeniería informática, se sumerge en el mundo tecnológico desde
            joven. Tras graduarse, descubre su pasión por el desarrollo web y con esfuerzo, se convierte
            en administrador de sitios web. Siendo hoy en día emprendedor, demuestra que sus
            conocimientos son clave para alcanzar el éxito.</p>
          </div>
        </div>

        <div className="container-carousel-item-video">
          <img src={CarrouselVideo3} alt="Egresado 3" className='container-video-thumbnail' />
          <div className="container-video-content">
            <p>Alejandro, egresado de ingeniería informática, se sumerge en el mundo tecnológico desde
            joven. Tras graduarse, descubre su pasión por el desarrollo web y con esfuerzo, se convierte
            en administrador de sitios web. Siendo hoy en día emprendedor, demuestra que sus
            conocimientos son clave para alcanzar el éxito.</p>
          </div>
        </div>

        <div className="container-carousel-item-video">
          <img src={CarrouselVideo4} alt="Egresado 4" className='container-video-thumbnail' />
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