import CarrouselGaleryImages1 from '../../statics/CarouselProjects4.webp';
import CarrouselGaleryImages2 from '../../statics/CarouselProjects5.webp';
import CarrouselGaleryImages3 from '../../statics/CarouselProjects3.webp';
import CarrouselGaleryImages4 from '../../statics/CarouselProjects6.webp';

import '../../style/FeaturedProyects/CarrouselGalery.css';

export const CarrouselGalery = () => {
  return (
    <div className="container-carousel">
      <div className="container-carousel1_circleGalery"></div>

      <div className="container-displayFlex-featured">

        <div className="container-carousel-item">
          <div className="container-content">
            <h1>ASISTENCIA INTELIGENTE: INNOVACIÓN EN PRESENCIA DIGITAL</h1>
            <p>Este sistema usa reconocimiento facial y aprendizaje automático para modernizar la manera en que las instituciones rastrean la asistencia, mejorando la eficiencia y la seguridad.</p>
          </div>

          <div className="container-content_images">
              <img src={CarrouselGaleryImages1} alt="Proyecto 1" className='container_galery_img' />
          </div>
        </div>

        <div className="container-carousel-item">
          <div className="container-content_images">
            <img src={CarrouselGaleryImages2} alt="Proyecto 2" className='container_galery_img' />
          </div>
         
          <div className="container-content container-content-modify">
            <h1>EDUCATECH: REINVENTANDO EL APRENDIZAJE ONLINE</h1>
            <p>Nuestra plataforma transforma la educación virtual con herramientas interactivas y personalizadas que fomentan una experiencia de aprendizaje inmersiva y colaborativa.</p>
          </div>
        </div>

        <div className="container-carousel-item">
          <div className="container-content container-content-modify-three">
            <h1>HEALTHCONNECT: TU COMPAÑERO DE BIENESTAR</h1>
            <p>Una aplicación móvil que promueve hábitos saludables, ofreciendo seguimiento personalizado, consejos de nutrición y rutinas de ejercicios basadas en IA.</p>
          </div>

          <div className="container-content_images">
            <img src={CarrouselGaleryImages3} alt="Proyecto 3" className='container_galery_img' />
          </div>
        </div>

        <div className="container-carousel-item">
          <div className="container-content_images">
              <img src={CarrouselGaleryImages4} alt="Proyecto 4" className='container_galery_img' />
          </div>
          
          <div className="container-content container-content-modify-four">
            <h1>DATASCOPE: VISUALIZACIÓN Y ANÁLISIS DE DATOS</h1>
            <p>DataScope es una herramienta poderosa para la visualización de datos, que permite a los usuarios descubrir patrones y obtener insights valiosos a partir de grandes conjuntos de datos.</p>
          </div>
        </div>
      </div>

    </div>
  );
}