import carrouselCourse1 from '../../statics/img-code.webp';
import carrouselCourse2 from '../../statics/CarrouselCourse1.webp';
import carrouselCourse4 from '../../statics/second-bridge.webp';
import carrouselCourse5 from '../../statics/CarrouselCourse2.webp';
import carrouselCourse6 from '../../statics/CarrouselCourse3.webp';
import carrouselCourse7 from '../../statics/CarrouselCourse4.webp';

export const CarrouselCourses = () => {
  return (
    <div className="container-carousel-courses">
      <div className="container-course-item">
        <img src={ carrouselCourse1 } alt="" className="container-course-image" />
        <h1>APRENDE A PROGRAMAR</h1>
        <p>Curso gratuito en línea que cubre los fundamentos de la programación.</p>
        <button className="container-course-button">Ver Curso</button>
      </div>

      <div className="container-course-item">
        <img src={ carrouselCourse2 } alt="" className="container-course-image" />
        <h1>HTML Y CSS DESDE CERO</h1>
        <p>Tutorial interactivo para principiantes en diseño web.</p>
        <button className="container-course-button">Acceder al Tutorial</button>
      </div>

      <div className="container-course-item">
        <img src="" alt="" className="container-course-image" />
        <h1>PYTHON PARA TODOS</h1>
        <p>Serie de lecciones para empezar con Python, ideal para principiantes.</p>
        <button className="container-course-button">Comienza a aprender</button>
      </div>

      <div className="container-course-item">
        <img src={ carrouselCourse4 } alt="" className="container-course-image" />
        <h1>INTRODUCCIÓN A LAS REDES</h1>
        <p>Explicaciones claras y prácticas sobre conceptos básicos de networking.</p>
        <button className="container-course-button">Explora el curso</button>
      </div>

      <div className="container-course-item">
        <img src={ carrouselCourse5 } alt="" className="container-course-image" />
        <h1>SEGURIDAD INFORMÁTICA: UNA GUÍA PRÁCTICA</h1>
        <p>Conocimientos esenciales sobre la protección de sistemas informáticos.</p>
        <button className="container-course-button">Leer la guía </button>
      </div>

      <div className="container-course-item">
        <img src={ carrouselCourse6 } alt="" className="container-course-image" />
        <h1>FUNDAMENTOS DE BASES DE DATOS</h1>
        <p>Recurso para entender la gestión de datos y practicar con bases de datos reales.</p>
        <button className="container-course-button">Acceder al Tutorial</button>
      </div>

      <div className="container-course-item">
        <img src={ carrouselCourse7 } alt="" className="container-course-image" />
        <h1>DESARROLLO DE APPS MÓVILES</h1>
        <p>Aprende a crear tu primera aplicación móvil con este curso introductorio.</p>
        <button className="container-course-button">Ver Curso</button>
      </div>
    </div>
  );
}