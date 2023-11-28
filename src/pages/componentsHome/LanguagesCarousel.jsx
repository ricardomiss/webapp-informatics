import JavaScript from '../../statics/jss.webp';
import Python from '../../statics/py2.webp';
import CMASMAS from '../../statics/c.webp';
import MySQL from '../../statics/we.webp';

import '../../style/Home/LanguagesCarousel.css';

export const LanguagesCarousel = () => {
  return (
    <div className="container-languagesCarousel">
        <div className="container-languagesCarousel_circle-bottom">

            <div className="container-lenguagesCarousel_column">
                <div className="container-lenguagesCarousel_images">
                    <img src={ JavaScript } alt="" />
                </div>

                <h3>
                    JAVASCRIPT: EL LENGUAJE DE LA WEB INTERACTIVA
                </h3>

                <p>
                    Domina JavaScript, el lenguaje esencial para el desarrollo web moderno. Aprende a 
                    crear aplicaciones web dinámicas y responsivas que cautivan a usuarios en todo el 
                    mundo.
                </p>
            </div>

            <div className="container-lenguagesCarousel_column">
                <div className="container-lenguagesCarousel_images">
                    <img src={ Python } alt="" />
                </div>

                <h3>
                    PYTHON: PROGRAMACIÓN EFICIENTE Y VERSÁTIL 
                </h3>

                <p>
                    Con python, adquiere la habilidad de escribir código claro y poderoso. Es el lenguaje 
                    ideal para la ciencia de datos, automatización y desarrollo rápido de aplicaciones.
                </p>
            </div>

            <div className="container-lenguagesCarousel_column">
                <div className="container-lenguagesCarousel_images">
                    <img src={ CMASMAS } alt="" />
                </div>

                <h3>
                    C++: RENDIMIENTO Y CONTROL DE SISTEMAS  
                </h3>

                <p>
                    Profundiza en C++, un lenguaje que ofrece un gran control sobre recursos del sistema. 
                    Es la elección perfecta para el desarrollo de software de alto rendimiento y juegos. 
                </p>
            </div>

            
            <div className="container-lenguagesCarousel_column">
                <div className="container-lenguagesCarousel_images">
                    <img src={ MySQL } alt="" />
                </div>

                <h3>
                    MYSQL: GESTIÓN DE BASES DE DATOS 
                </h3>

                <p>
                    Aprende a manejar MySQL, el sistema de gestión de bases de datos relacional líder. 
                    Gestiona grandes cantidades de datos y desarrolla habilidades en almacenamiento y 
                    recuperación eficiente de la información.
                </p>
            </div>
        </div>
    </div>
  )
}